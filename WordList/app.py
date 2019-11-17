from flask import Flask, request, Response, render_template
import requests
import itertools
from flask_wtf.csrf import CSRFProtect
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField
from wtforms.validators import Regexp, ValidationError, Optional
import re
from flask.json import jsonify
apiKey= "20b8dc1b-1835-4561-a2fc-7978549ea49a"

class WordForm(FlaskForm):
    avail_letters = StringField("Letters", validators= [Optional(),
        Regexp(r'^[a-z]+$', message="must contain letters only")
    ])
    submit = SubmitField("Go")
    #Generate Word Length Element
    select = SelectField('Word Length', choices=[('None','No Preference'),('3', 'Three'),('4','Four'),('5','Five'),('6','Six'),('7','Seven'),('8','Eight'),('9','Nine'),('10','Ten')])
    
    #Generate Pattern Element
    pattern = StringField("Pattern", validators= [Optional(),
        Regexp(r'^[a-z\.]+$', message="enter a valid pattern from (a-z,.)")
    ])


csrf = CSRFProtect()
app = Flask(__name__)
app.config["SECRET_KEY"] = "row the boat"
csrf.init_app(app)

@app.route('/index')
def index():
    form = WordForm()
    return render_template("index.html", form=form)


@app.route('/words', methods=['POST','GET'])
def letters_2_words():

    form = WordForm()
    if form.validate_on_submit():
        if not form.validate():
            return render_template("index.html", form=form) 
        if (form.select.data != 'None' and len(form.pattern.data) != 0) and (int(form.select.data) != len(form.pattern.data)): 
            form.pattern.errors.append('Word Length and pattern must be the same length!')
            print("error1")
            return render_template("index.html", form=form)
        #Provide pattern if no letters are provided
        if len(form.avail_letters.data) == 0 and len(form.pattern.data) == 0:
            form.pattern.errors.append('Provide letters or a pattern!')
            print("error2")
            return render_template("index.html", form=form)
            
        letters = form.avail_letters.data
    else:
        return render_template("index.html", form=form)

    with open('sowpods.txt') as f:
        good_words = set(x.strip().lower() for x in f.readlines())

    word_set = set()
    #Filter based on word length
    if len(letters) !=0:
        for l in range(3,len(letters)+1):
            for word in itertools.permutations(letters,l):
                w = "".join(word)
                if w in good_words:
                    if form.select.data != "None":
                        if len(w) >= int(form.select.data):
                            word_set.add(w)
                    else:
                        word_set.add(w)

    #Filter based on pattern
    #if len(form.pattern.data) != 0:
    if form.pattern.data.find('.') != -1:
        index = []
        temp_word_set=set()
        #Push pattern into an array to scan through the indices
        for i in range(len(form.pattern.data)):
            if form.pattern.data[i] != '.':
                index.append(i)
        if len(word_set) != 0:
            temp_word_set = word_set.copy()
        else:
            temp_word_set = good_words.copy()

        for j in temp_word_set:
            if len(j) == len(form.pattern.data):
                for k in index:
                    #If word does not match at index we remove it and check the next word
                    if j[k] != form.pattern.data[k]:
                        word_set.discard(j)
                        break
                    #If we reach the end of the word, then the pattern matches
                    if k == index[len(index)-1]:
                        word_set.add(j)
            else:
                word_set.discard(j)
    return render_template('wordlist.html',
        wordlist=sorted(sorted(word_set), key=len),
        name="CS4131")




@app.route('/proxy/<word>')
def proxy(word):
    print(f"https://www.dictionaryapi.com/api/v3/references/collegiate/json/{word}?key={apiKey}")
    resp = requests.get(f"https://www.dictionaryapi.com/api/v3/references/collegiate/json/{word}?key={apiKey}")
    return jsonify(resp.json())

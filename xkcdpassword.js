calculatePasswords = function(){
    var passwordLength = document.querySelector("#text").value;
    var maxWord = document.querySelector("#maxword").value;
    var minWord = document.querySelector("#minword").value;
    var easyType = document.getElementById("easytype").checked;
    var subType = document.getElementById("subtype").checked;
    var tbl = document.querySelector("#pwhistory");
    var tr = document.createElement("tr");
    tbl.appendChild(tr);
    var counter = 0;
    var numPasswords = 0;
    var wArray = "acid acorn acre acts afar affix aged agent agile aging agony ahead aide aids aim a jar alarm alias alibi alien alike alive aloe aloft aloha alone amend amino ample amuse angel anger angle ankle apple april apron aqua area arena argue arise armed armor army aroma array arson art ashen ashes atlas atom attic avert avoid awake award awoke axis bacon badge bagel baggy baked baker balmy barge barn basil batch bath baton bats blade blast blaze bleak blend bless blink bloat blob blog blot blunt blurt blush boast boat body boil bok bolt boned boney bonus bony book booth boots boss botch both boxer breed bribe brick bride brim bring brink brisk broad broil broke brook broom brush buck bud buggy bulge bulk bully bunch bunny bunt bush bust busy buzz cable cache cadet cage cake calm cameo canal candy cane canon cape card cargo carol carry carve case cash cause cedar chain chair chant chaos charm chase cheer chef chess chest chew chief chili chill chip chomp chop chow chuck chump chunk churn cider cinc city civic civil clad claim clamp clap clashclasp class claw clay clean clear cleat cleft clerk click cling clink clip cloak clock clone cloth cloud clump coach coast coat cod coil coke cola cold colt coma come comic comma cone cope copy coral cork cost cot couc cough cover cozy craft cramp crane crank crate crave crazy creme crepe crept crib cried crook cross crowd crumb crush crust cub cult cupid cure curl curry curse curve curvy cushy cut cycle dab dad daily dairy daisy dance dandy dart data date dawndeaf deal dean debit debt debug decaf decal decay deck decor decoy deed delay denim dense dent depth derby desk dial diary dice dig dill dime dimly diner dingy disco dish disk ditch ditzy dizzy dock dodge doing doll dome donor donut dose dot dove down dowry doze drab drama drank draw dress drie d drift drill drive drone droop drove drown drum dry duck duct dude dug duke duo dusk dust duty dwarf dwell eagle early earth easel east eaten eats ebay ebony ebook echo edge eel eject elbow elder elf elk elm elope elude elves email emit empty emuenter entry envoy equal erase error erupt etch evade even evict evil evoke exact exit fable faced fact fade fall false fancy fang fax feast feed femu fence fend ferry fetal fetch fever fiber fifth fifty film filth final finch fit five flag flame flap flask fled flick fling flint flip float flock flop floss foam foe fogfoil folic folk fook fool found fox foyer frail frame fray fresh fried frill frisk from front frost froth frown froze fruit gag gains gala game gap gas gave gear gecko geek gem genre gift gig gills given glad glass glide gloss glove glow glue goal going golf gong good gooey gore gown grab grain grant grape graph grasp grass grave gravy gray green greet grew grid grief grill grip grit groom grope growl grub grunt guide gulf gulp gummy guru gush gut guy habit half halo halt happy hash hasty hatch hate haven hazel hazy heap heat heave hedge hefty help herbs hers hub hug hula hull human humid hump hung hunk hunt hurry hurt hush hut ice icing icon icy igloo image ion islam issue item ivory ivy jab jam jaws jazz jeep jelly jet jiffy job jog jolly jolt jot joy judge juice juicy july jumbo jump junky juror jury keep keg kept kick kilt kite kitty kiwi knee knelt koala kung ladle lady lair lake lance land lape l large lash lasso last late lazy left lega l lemon lend lens lent leve l lever lid life lift lilac lily limb limes lint lion lip list lived liver lunar lunch lung lurch lure lurk lying lyric mace maker malt  mama mango manor many map march mardi marry mash match mate math moan mocha moist mold mom moody mop morse most motor motto mount mouse mousy mouth move movie mower mud mug mulch mule mumbo mum my mural muse music musky mute nacho nag nail name nanny nap navy near neat neon nerd nest net next niece ninth nutty oak oasis oat ocean oil old olive omen oni on only o oze opal open opera opt otter ouch ounce outer oval oven owl ozone pace pagan pager palm panda panic pants panty paper park party pasta patch path patio payer pecan penny pep perch perky perm pest petal petri petty photo plank plant plaza plead plot plow pluck plug plus poach pod poem poet pogo point poise poker polar polio polka polo pon pony poppy pork poser pouch pound pout power prank press print prior prism prize probe prong proof props prude prune pry pug pull pulp pulse puma punch punk pupil puppy purr purse push putt rabid race rack radar radio raft rage raid rail rake rally ramp ranch range rank rant rash raven reach react ream rebel recap relax relay relic remix repay repel reply rerun reset rhyme rice rich ride rigid rigor rinse riot ripen rise risk ritzy rival river roast robe robin rock rogue roman romp rope rover royal ruby rug ruin rule runny rush rust rut sadly sage said saint salad salon salsa saltsame sandy santa satin sauna saved savor sax say scale scam scan scare scarf scary scoff scold scoop scoot scope score scorn scout scowl scrap scrub scuba scuff sect sedan self send sepia serve set seven shack shade shady shaft shaky sham shape share sharp shed sheep sheet shelf shell shine shiny ship shirt shock shop shore shout shove shown showy shred shrug shun shush shut shy sift silk silly silo sip siren sixth size skate skew skid skier skies skip skirt skit sky slack slain slam slang slash slate slaw sled sleek sleep sleet slept slice slick slimy sling slip slit slob slot slug slum slurp slush small smash smell smile smirk smog snack snap snare snarl sneak sneer sniff snore snort snout snowy snub snuff speak speed spend spent spewspied spill spiny spoil spoke spoof spool spoon sport spot spout spray spree spur squad squat squid stack staff stage stain stall stamp stand stank stark start stash state stays steam steep stem step stew stick sting stir stock stole stomp stony stood stool stoop stop storm stout stove straw stray strut stuck stud stuff stump stung stunt suds sugar sulk surf sushi swab swan swarm sway swear sweat sweep swell swept swim swing swipe swirl swoop swore syrup tacky taco tag take tall talon tamer tank taper taps tarot tart task taste tasty taunt thank thaw theft theme thigh thing think thong thorn those throb thud thumb thump thus tiara tidal tidy tiger tile tilt tint tiny trace track trade train trait trap trash tray treat tree trek trend trial tribe trick trio trout truce truck trump trunk tug tulip tummy turf tusk tutor tutu tux tweak tweet twice twine twins twirl twist uncle uncut undo unify union unit untie upon upper urban used user usher utter value vapor vegan venue verse vest veto vice video view viral virus visa visor vixen vocal voice void volt voter vo wel wad wafer wager wages wagon wake walk wand wasp watch water wavy wheat whiff whole whoop wick widen widow width wife wifi wilt wimp wind wing wink wipe wired wiry wise wish wispy wok wolf womb wool woozy word work worry wound woven wrath wreck wrist xerox wel wad wafer wager wages wagon wake walk wand wasp watch water wavy wheat whiff whole whoop wick widen widow width wife wifi wilt wimp wind wing wink wipe wired wiry wise wish wispy wok wolf womb wool woozy word work worry wound woven wrath wreck wrist xerox zebra zero zesty zippy zone zoom wel wad wafer wager wages wagon wake walk wand wasp watch water wavy wheat whiff whole whoop wick widen widow width wife wifi wilt wimp wind wing wink wipe wired wiry wise wish wispy wok wolf womb wool woozy word work worry wound woven wrath wreck wrist xerox";
    var array = wArray.split(" ");
    
    //alert(wArray.length);
    if(subType == true){
        var subArray = wArray.replace(/e/g, "3");
        subArray = subArray.replace(/l/g, "1");
        subArray = subArray.replace(/o/g, "0");
        subArray = subArray.replace(/s/g, "5");
        array = subArray.split(" ");
    }        
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    //alert(easyType);
    for(var i = 0; i < array.length; i++){
        let temp = array[i];
        if(temp.length > minWord && temp.length < maxWord){
            //alert(temp);
            //alert(counter);
            if(counter + temp.length > passwordLength){
                var td = document.createElement("td");
                td.innerHTML = counter;
                tr.appendChild(td);
                i = array.length +1;
                //alert("password done");
            }
            else{
                if(easyType == true){
                    var easyCounter = 0;
                    counter += temp.length;
                    var td = document.createElement("td");
                    td.innerHTML = temp;
                    tr.appendChild(td);
                    //alert("enter easy loop");
                }
                else{
                    counter += temp.length;
                    var td = document.createElement("td");
                    td.innerHTML = temp;
                    tr.appendChild(td);
                }
                //alert("new word added");
            }
        }

    }
    

}
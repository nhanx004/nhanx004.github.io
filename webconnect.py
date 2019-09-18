#Echo server program
import socket

HOST = ''                   #Symbolic name meaning the local host
PORT = 50007                #Arbitrary non-privileged port
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
s.bind((HOST,PORT))
s.listen(1)
conn, addr = s.accept()     #blocks here

while True:
    print('Connected by', addr)
    data = conn.recv(1024)
    print('got data message:', data.decode('utf8'))

    #Additional code that turns this into a web server instead of echo server
    first_line = data.decode('utf8') 
    command, uri, http_vers = first_line.split()        #Split unpacks line into three separate componenets
    try:
        uri = "." + uri                 #Create a relative path by adding the "." in front of the uri
        page = open(uri).read()         #Open the uri and read it all in one go
    except:
        print("not found")              #Print out file not found
        data = "HTTP/1.1 404 Not Found\n"
        conn.send(data.encode('utf8'))
    
    resp = "HTTP/1.1 200 OK \n"
    conn.send(resp.encode('utf8'))

    #Send back content type header and content length header
    ctype  = "Content-Type: text/html\n"
    clength = "Content-Length: {}\n\n".format(len(page))
    conn.send(ctype.encode('utf8'))
    conn.send(clength.encode('utf8'))

    #Send back page
    conn.send(page.encode('utf8'))
    #end of Additional code for web server

    #if not data: break
    #data = data.decode('utf8').upper().encode('utf8')   # converts to uppercase 
    #conn.send(data)
    

conn.close()
#!/usr/bin/python3


print("content-type: text/html")
print()


import subprocess as sb
import cgi

var = cgi.FieldStorage("x")
command = var.getvalue("x")
output = sb.getoutput(command)
print(output)
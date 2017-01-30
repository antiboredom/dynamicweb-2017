Make a new directory

```
mkdir DIRECTORYNAME
```


Change directory

```
cd DIRECTORYNAME
```

List contents of current directory

```
ls
```

Show name of current directory and full path

```
pwd
```

Go up one

```
cd ..
```


Open a file using the default application (mac only)

```
open FILENAME
```

Open the current directory in the Finder (mac only)
(the ```.``` means "here")

```
open .
```

Print the contents of a file to the screen

```
cat FILENAME
```

Print the contents of a file to the screen, with pagination

```
more FILENAME
```

Search for a something in a text file

```
grep SEARCHTERM FILENAME
```

Direct output with ```>```

```
grep "whale" mobydick.txt > whales.txt
```

Sort a text file alphabetically
```
sort FILENAME
```

Get help with the ```man``` (manual) command
```
man COMMAND
```

Send the output of one command to the input of another command
```
grep "whale" mobydick.txt | sort
```

See all running processes
```
top
```

See your user's processes
```
ps
```

End a process
```
kill PIDNUMBER
```

Do something as the superuser
```
sudo COMMANDNAME
```

Repeat the last command
```
!!
```


Pause a process
```
ctrl-z
```

Resume the last paused process
```
fg %1
```

Stop user input
```
ctrl-d
```
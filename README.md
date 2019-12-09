### USAGE


```javascript
// clone repo
git clone https://github.com/albseb511/data-json.git

// enter folder
cd data-json

// install dependencies
npm install

// run server
node index.js
```

fetching data:

```javascript
url: http://localhost:8000/students

// DO NOT MODIFY THE FILES

// Create your project in a seperate folder
// Add the following snippet to the top of your code
// use the data variable to store info
    var data
    window.addEventListener('load',function(){
        var xhr = new XMLHttpRequest()
        xhr.open('GET','http://localhost:8000/students')
        xhr.onload = function(){
            data = xhr.response
        }
        
        xhr.send()
    })
```


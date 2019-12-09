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

```html
url: http://localhost:8000/students

// DO NOT MODIFY THE FILES
<!-- Use this in your project
    click on show() to get the data
    -->
<html>
<body>
    <button onclick="show()">load</button>
</body>
<script>
    var data
    window.addEventListener('load',function(){
        console.log('loading')
        var xhr = new XMLHttpRequest()
        xhr.open('GET','http://localhost:8000/students')
        xhr.onload = function(){
            data = xhr.response
            console.log(data)
        }
        xhr.send()
    })
</script>
</html>
```


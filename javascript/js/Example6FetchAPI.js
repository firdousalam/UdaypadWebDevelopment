<!DOCTYPE html>
<html>
<body>
<p id="demo">Fetch a file to change this text.</p>

<script>
getText("fetchData.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("demo").innerHTML = myText;
}
</script>

</body>
</html>

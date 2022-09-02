var userImageUploader = document.querySelector("#userImageUploader");
var userTopText = document.querySelector("#topText");
var userBottomText = document.querySelector("#bottomText");
var topTextBox = document.querySelector("#topTextBox");
var bottomTextBox = document.querySelector("#bottomTextBox");

function picPresenter() {
    if (this.files[0]) {
        document.querySelector("#userPreview").src = URL.createObjectURL(this.files[0]);
        document.querySelector("#generatedMeme").src = URL.createObjectURL(this.files[0]);        
      }
}

function syncTopText() {
    // console.log("test1");
    topTextBox.innerHTML = userTopText.value;
    // console.log(userTopText.value);
}

function syncBottomText() {
    console.log("test2");
    bottomTextBox.innerHTML = userBottomText.value;
}

userImageUploader.addEventListener("change",picPresenter);
userTopText.addEventListener("change",syncTopText);
userBottomText.addEventListener("change",syncBottomText);

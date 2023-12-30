function UI()
{
    this.image=document.querySelector("#outputImage");
    this.outputLanguage=document.querySelector("#outputLanguage");
    this.word=document.querySelector("#outputWord");

    this.languageList=document.querySelector("#language");

};

//Arayüzü değiştirme:
UI.prototype.changeUI=function()
{
    this.image.src=`images/${this.languageList.value}.png`;
    this.outputLanguage.textContent=this.languageList.options[this.languageList.selectedIndex].textContent;
   
};

UI.prototype.displayTranslate=function(content)
{
    this.word.textContent=content;
}

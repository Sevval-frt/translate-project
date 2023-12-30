function Translate(word,language)
{
    this.apikey="https://api.mymemory.translated.net";
    this.word=word;
    this.language=language;

    this.xhr=new XMLHttpRequest();
};


Translate.prototype.translateWords=function(callback){
//Ajax işlemleri:

const endpoint=`${this.apikey}/get?q=${this.word}&langpair=${this.language}`;

this.xhr.open("GET",endpoint);

this.xhr.onload=function(){
    if(this.status===200)
    {
        const json=JSON.parse(this.responseText);
        const text=json.responseData.translatedText;
        callback(null,text);
    }
    else
    {
        callback("HATA!",null);
    }

};

this.xhr.send();

};

//Inheritance:
Translate.prototype.changeParameters=function(newWord,newLanguage)
{
    this.word=newWord;
    this.language=newLanguage;
}
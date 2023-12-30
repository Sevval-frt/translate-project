//Prototype/Ajax/Callback
const form=document.querySelector("#translate-form");
const input=document.querySelector("#word");
const select=document.querySelector("#language");

allEventListeners();

function allEventListeners()
{
    form.addEventListener("submit",formSubmit);
    select.onchange=function()//Change özelliği
    {
        ui.changeUI();
    };
    
}

//-----------------------------------------------------

const translate = new Translate(input.value,select.value);

const ui = new UI();

//-----------------------------------------------------
function formSubmit(e)
{
    translate.changeParameters(input.value,select.value); //Eğer değiştirilirse anlık olarak verileri alsın.
    translate.translateWords(function(message,response)
    {
        if(message)
        {
            //hata
            ui.displayTranslate(message);
        }
        else
        {
            ui.displayTranslate(response);
        }

    });

    e.preventDefault();
}
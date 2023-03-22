const chatbody=document.querySelector(".chat-body");
const textinput=document.querySelector("#textinput");
const send=document.querySelector(".send");

send.addEventListener("click", () => RenderUserMessage());

textinput.addEventListener("keyup",(event)=>
{
    if(event.keyCode === 13)
    {
        RenderUserMessage();
    }

});



const RenderUserMessage = () => {
    const userInput = textinput.value;
    RenderMessageElement(userInput,"user");
    textinput.value="";
    renderChatBotResponse(userInput);
    ScrollBar();
};

const renderChatBotResponse = (userInput) =>
{
    const res=getChatBotResponse(userInput);
    RenderMessageElement(res);
};

const RenderMessageElement = (text,type) => {
    let className="user-message";
    if(type!=="user")
    {
        className="chatbot-message";
    }


    const messageElement = document.createElement("div");
    const textNode = document.createTextNode(text);
    messageElement.classList.add(className);
    messageElement.append(textNode);
    chatbody.append(messageElement);
    
};

const ScrollBar = () => {
    if(chatbody.scrollHeight>0)
    {
        chatbody.scrollTop = chatbody.scrollHeight;
    }
}

/*
const getChatBotResponse = (userInput) =>
{
    return responseobject[userInput]==undefined? "Wrong Query" : responseobject[userInput];
};
*/




const getChatBotResponse = (userInput) =>
{   
    
    
    userInput = userInput.toLowerCase();
    var filter = userInput.split(" "); 
    
   
    for(let val=0; val<filter.length; val++)
    {
        if(responseobject[filter[val]])
        {
            return responseobject[filter[val]];
        }
    }
}



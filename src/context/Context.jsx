import { createContext, useState } from "react"
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>
{
    const[input, setInput] = useState("");
    const[recentPrompt, setRecentPrompt] = useState("");
    const[prevPrompt, setPrevPrompt] = useState([]);
    const[showResult, setShowResult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState("");

    //To display text word by word
    const delayPara = (index, nextWord) =>
    {
        setTimeout(
            function ()
            {
                setResultData(prev=> prev + nextWord);
            }, 75*index
        )
    }

    //To get a new blank chat when we click the "New Chat" button
    const newChat = () =>
    {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) =>
    {
        setResultData("")
        setLoading(true)    //Show loading while waiting for response
        setShowResult(true) //prompt has been sent... so need to show the result
        let response;
        if(prompt !== undefined)
        {
            response = await run(prompt);   //call the run function from gemini.js which actually interacts with gemini and store response in "result"
            setRecentPrompt(prompt)
        }
        else
        {
            setPrevPrompt(prev =>[...prev, input])  //Store our input in the previous prompts array
            setRecentPrompt(input)
            response = await run(input)
        }
        setRecentPrompt(input)  //The most recent prompt is the currently given input   
        let responseArray = response.split("**");   //split the response according to "**" for bold and store it in a response array
        //FOR BOLD TEXT
        let newResponseArray="";   //Array to store the new updated response
        for(let i=0; i<responseArray.length; i++)
        {
            if(i === 0 || i%2 !== 1)    //Whenever the index is an even number
            {
                newResponseArray += responseArray[i];
            }
            else
            {
                newResponseArray += "<b>"+responseArray[i]+"</b>"   //Making the bold text bold
            }
        }
        //FOR NEW LINE
        let newResponseArray2 = newResponseArray.split("*").join("</br>")   //Splitting with the remaining "*" and adding </br> for new line

        //FOR TYPING EFFECT
        let newResponseArray3 = newResponseArray2.split(" ");   //split the final response array using space
        for(let i=0; i< newResponseArray3.length; i++)
        {
            const nextWord = newResponseArray3[i];
            delayPara(i, nextWord+" "); //call delay para and display words from array one by one separated by space
        }

        setLoading(false)   //Can remove loading once the response has been fetched
        setInput("")    //Clear the input box and prepare for new input
    }


    const contextValue = 
    {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
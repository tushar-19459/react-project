import { createContext, useContext } from "react"

const AccoData = createContext()
export function DataProvider({ children }) {

    const data = [
        {
            question: "question1",
            ans: "ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 "
        },
        {
            question: "question2",
            ans: "ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 "
        },
        {
            question: "question3",
            ans: "ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 "
        },
        {
            question: "question4",
            ans: "ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 ans for question 1 "
        },
    ]

    return (
        <AccoData.Provider value={{data}}>
            {children}
        </AccoData.Provider>
    )
}

export function useData() {
    return useContext(AccoData)
}
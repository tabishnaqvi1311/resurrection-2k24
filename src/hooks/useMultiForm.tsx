import { useState } from "react"

/**
 * A custom hook for managing multi-step forms.
 * @param {Array} steps - An array containing the steps of the form.
 * @returns {Object} An object containing functions and state variables for managing the form.
 */
export const useMultiForm = (steps: any) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        window.scroll(0, 0);
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })

    }
    function back() {
        window.scroll(0, 0)
        setCurrentStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    function goTo(index: number) {
        setCurrentStepIndex(index)
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        next, 
        back,
        steps,
    }
} 
import { CloseButton } from "../../CloseButton";
import successUrl from '../../../assets/success.svg'

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}:FeedbackSuccessStepProps){
    return(
        <>
            <header>
                <CloseButton/>
            </header>
            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successUrl} alt="Imagem representando sucesso no envio"/>
                <span className="text-xl mt-2">Agradecemos o feedback</span>
                <button 
                    className="py-2 px-6 mt-6 dark:bg-zinc-800 bg-zinc-100 rounded-md border-transparent text-sm leading-6 dark:hover:bg-zinc-700 hover:bg-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                    onClick={onFeedbackRestartRequested}
                >
                    Quero enviar outro!
                </button>
            </div>
        </>
    )
}
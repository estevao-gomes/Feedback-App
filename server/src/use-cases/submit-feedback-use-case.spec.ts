import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)

describe('Submit Feedback', ()=>{
    it('Should be able to submit a feedback',async ()=>{  

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'comment',
            screenshot: 'data:image/png;base64test.jpg'    
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
});

describe('Submit Feedback', ()=>{
    it('Should not be able to submit a feedback without a type',async ()=>{  

        await expect(submitFeedback.execute({
            type: '',
            comment: 'comment',
            screenshot: 'data:image/png;base64test.jpg'    
        })).rejects.toThrow();
    });
});

describe('Submit Feedback', ()=>{
    it('Should not be able to submit a feedback without a comment',async ()=>{  

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64test.jpg'    
        })).rejects.toThrow();
    });
});

describe('Submit Feedback', ()=>{
    it('Should not be able to submit an invalid screenshot ',async ()=>{  

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'comment',
            screenshot: 'test.jpg'    
        })).rejects.toThrow();
    });
});
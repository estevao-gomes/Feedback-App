import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create ({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type, //short syntax de type: type,
                comment, //short syntax de comment: comment,
                screenshot //short syntax de screenshot: screenshot
            }
        })
    };
}
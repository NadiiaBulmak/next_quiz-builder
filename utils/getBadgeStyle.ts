import { Difficulty } from "@/types/quiz";

export const getBadgeStyle = (difficulty: Difficulty | string) => {
    switch(difficulty) {
        case Difficulty.Beginner:
            return 'bg-green-100 border-1 border-green-200'; //green
        case Difficulty.Elementary:
            return 'bg-lime-100 border-1 border-lime-200';
        case Difficulty.Intermediate:
            return 'bg-yellow-100 border-1 border-yellow-200';
        case Difficulty.Advanced:
            return 'bg-red-100 border-1 border-red-200';
        case Difficulty.Mixed:
            return 'bg-cyan-100 border-1 border-cyan-200';
        
        default:
            return 'bg-gray-100 border-1 border-gray-200'
    }
}

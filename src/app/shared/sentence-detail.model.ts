import * as internal from "stream";

export class SentenceDetail {
    SentenceDetailId: number = 0;
    sentence: string = '';
    pattern: string = '';
    result: number = (this.pattern.length != 0) ? this.sentence.length - this.sentence.replace(this.pattern, "").length / this.pattern.length : 0;
    caseinsensitive: string;
}

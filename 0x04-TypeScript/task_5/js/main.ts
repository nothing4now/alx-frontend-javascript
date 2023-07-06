interface MajorCredits {
    credits: number;
    brand: 'Major';
}

interface MinorCredits {
    credits: number;
    brand: 'Minor';
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits) => subject1.credits + subject2.credits;
const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits) => subject1.credits + subject2.credits;

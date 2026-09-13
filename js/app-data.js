/* Chango shared app data — loaded by test.html, result.html, next.html */
var QUESTIONS = [
 { level: 'A1', cat: 'Grammar', q: '___ is your name?', options: ['What', 'Who', 'How', 'Why'], correct: 0 },
 { level: 'A1', cat: 'Grammar', q: 'She ___ a student.', options: ['is', 'are', 'am', 'be'], correct: 0 },
 { level: 'A1', cat: 'Grammar', q: 'I ___ from Egypt.', options: ['am', 'is', 'are', 'be'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'The plural of "child" is ___.', options: ['childs', 'children', 'childes', 'childrens'], correct: 1 },
 { level: 'A1', cat: 'Grammar', q: '___ you like tea?', options: ['Do', 'Does', 'Is', 'Are'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'Which word means the opposite of "big"?', options: ['small', 'tall', 'huge', 'long'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'A "teacher" works in a ___.', options: ['school', 'bank', 'shop', 'hospital'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'The opposite of "hot" is ___.', options: ['cold', 'warm', 'long', 'new'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'Which one is a number?', options: ['Five', 'Red', 'Run', 'Cold'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'A tool for cutting paper is ___.', options: ['scissors', 'spoon', 'ball', 'shirt'], correct: 0 },
 { level: 'A1', cat: 'Grammar', q: '___ are you from?', options: ['Where', 'What', 'Who', 'When'], correct: 0 },
 { level: 'A1', cat: 'Grammar', q: 'This ___ my friend Ali.', options: ['is', 'are', 'am', 'be'], correct: 0 },
 { level: 'A1', cat: 'Grammar', q: 'They ___ happy today.', options: ['are', 'is', 'am', 'be'], correct: 0 },
 { level: 'A1', cat: 'Grammar', q: 'I ___ a book every night.', options: ['read', 'reads', 'reading', 'readed'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'The color of the sky is ___.', options: ['blue', 'red', 'green', 'black'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'A "cat" is an ___.', options: ['animal', 'apple', 'office', 'idea'], correct: 0 },
 { level: 'A1', cat: 'Vocabulary', q: 'We eat breakfast in the ___.', options: ['morning', 'night', 'week', 'hour'], correct: 0 },

 { level: 'A2', cat: 'Grammar', q: 'She ___ to work every day.', options: ['goes', 'go', 'going', 'gone'], correct: 0 },
 { level: 'A2', cat: 'Grammar', q: 'I have ___ apple.', options: ['an', 'a', 'the', 'some'], correct: 0 },
 { level: 'A2', cat: 'Grammar', q: 'I ___ TV when the phone rang.', options: ['was watching', 'am watching', 'watch', 'watched'], correct: 0 },
 { level: 'A2', cat: 'Vocabulary', q: 'The word "happy" means the same as ___.', options: ['glad', 'sad', 'angry', 'tired'], correct: 0 },
 { level: 'A2', cat: 'Grammar', q: '___ you like to come with us?', options: ['Would', 'Do', 'Are', 'Does'], correct: 0 },
 { level: 'A2', cat: 'Vocabulary', q: 'We had to wait ___ the bus for twenty minutes.', options: ['for', 'to', 'at', 'on'], correct: 0 },
 { level: 'A2', cat: 'Vocabulary', q: '"Begin" is the same as ___.', options: ['start', 'finish', 'stop', 'wait'], correct: 0 },
 { level: 'A2', cat: 'Vocabulary', q: '"Quick" means the same as ___.', options: ['fast', 'slow', 'big', 'loud'], correct: 0 },
 { level: 'A2', cat: 'Vocabulary', q: '"Arrive" means to ___.', options: ['reach', 'leave', 'start', 'fall'], correct: 0 },
 { level: 'A2', cat: 'Grammar', q: 'Did you ___ the party last night?', options: ['enjoy', 'enjoyed', 'enjoying', 'enjoys'], correct: 0 },
 { level: 'A2', cat: 'Grammar', q: 'There ___ many cars on the street.', options: ['are', 'is', 'be', 'am'], correct: 0 },
 { level: 'A2', cat: 'Grammar', q: 'He ___ his homework every evening.', options: ['finishes', 'finish', 'finished', 'finishing'], correct: 0 },
 { level: 'A2', cat: 'Grammar', q: 'I am interested ___ learning new languages.', options: ['in', 'on', 'at', 'for'], correct: 0 },
 { level: 'A2', cat: 'Vocabulary', q: '"Rude" means ___.', options: ['impolite', 'polite', 'kind', 'clever'], correct: 0 },
 { level: 'A2', cat: 'Vocabulary', q: '"Cheap" means ___.', options: ['not expensive', 'very costly', 'free', 'large'], correct: 0 },
 { level: 'A2', cat: 'Vocabulary', q: 'A place where you can borrow books is a ___.', options: ['library', 'hospital', 'market', 'factory'], correct: 0 },

 { level: 'B1', cat: 'Grammar', q: 'If I ___ rich, I would travel all over the world.', options: ['were', 'was', 'am', 'will be'], correct: 0 },
 { level: 'B1', cat: 'Grammar', q: 'She suggested ___ to the cinema.', options: ['going', 'to go', 'go', 'goes'], correct: 0 },
 { level: 'B1', cat: 'Grammar', q: 'I look forward to ___ from you soon.', options: ['hearing', 'hear', 'heard', 'hears'], correct: 0 },
 { level: 'B1', cat: 'Grammar', q: 'The letter ___ by John yesterday.', options: ['was written', 'wrote', 'is written', 'has written'], correct: 0 },
 { level: 'B1', cat: 'Grammar', q: 'He has been working here ___ 2019.', options: ['since', 'for', 'from', 'during'], correct: 0 },
 { level: 'B1', cat: 'Vocabulary', q: 'I need to ___ a decision by Friday.', options: ['make', 'do', 'take', 'get'], correct: 0 },
 { level: 'B1', cat: 'Vocabulary', q: '"Purchase" means the same as ___.', options: ['buy', 'sell', 'rent', 'borrow'], correct: 0 },
 { level: 'B1', cat: 'Vocabulary', q: '"Suggest" is the same as ___.', options: ['propose', 'refuse', 'forget', 'ignore'], correct: 0 },
 { level: 'B1', cat: 'Vocabulary', q: '"Expensive" means ___.', options: ['costing a lot', 'very cheap', 'free', 'broken'], correct: 0 },
 { level: 'B1', cat: 'Vocabulary', q: '"Borrow" means to ___.', options: ['take and use temporarily', 'sell something', 'pay a bill', 'throw away'], correct: 0 },
 { level: 'B1', cat: 'Grammar', q: 'They have lived here ___ five years.', options: ['for', 'since', 'from', 'during'], correct: 0 },
 { level: 'B1', cat: 'Grammar', q: 'I would rather ___ at home tonight.', options: ['stay', 'to stay', 'staying', 'stayed'], correct: 0 },
 { level: 'B1', cat: 'Grammar', q: 'This movie is ___ interesting than the last one.', options: ['more', 'most', 'much', 'very'], correct: 0 },
 { level: 'B1', cat: 'Vocabulary', q: '"Accommodation" means a place to ___.', options: ['live', 'work', 'study', 'shop'], correct: 0 },
 { level: 'B1', cat: 'Vocabulary', q: '"Generate" most nearly means ___.', options: ['produce', 'destroy', 'hide', 'borrow'], correct: 0 },
 { level: 'B1', cat: 'Vocabulary', q: 'A "deadline" is ___.', options: ['a time limit', 'a meeting', 'a report', 'a salary'], correct: 0 },

 { level: 'B2', cat: 'Grammar', q: 'By the time we arrived, the movie ___.', options: ['had started', 'has started', 'started', 'starts'], correct: 0 },
 { level: 'B2', cat: 'Grammar', q: 'The report needs ___ by Friday.', options: ['to be submitted', 'submitting to', 'submitted', 'be submitted'], correct: 0 },
 { level: 'B2', cat: 'Grammar', q: 'Hardly ___ when the doorbell rang.', options: ['had I sat down', 'I sat down', 'did I sat down', 'I had sat'], correct: 0 },
 { level: 'B2', cat: 'Grammar', q: 'She is used to ___ early in the morning.', options: ['waking up', 'wake up', 'woke up', 'wakes up'], correct: 0 },
 { level: 'B2', cat: 'Vocabulary', q: 'The word "ubiquitous" means ___.', options: ['present everywhere', 'very rare', 'extremely large', 'completely hidden'], correct: 0 },
 { level: 'B2', cat: 'Vocabulary', q: '"Diligent" most nearly means ___.', options: ['hardworking', 'lazy', 'careless', 'stubborn'], correct: 0 },
 { level: 'B2', cat: 'Vocabulary', q: '"Comprehensive" most nearly means ___.', options: ['complete', 'partial', 'quick', 'noisy'], correct: 0 },
 { level: 'B2', cat: 'Vocabulary', q: '"Feasible" means ___.', options: ['possible to do', 'impossible', 'expensive', 'illegal'], correct: 0 },
 { level: 'B2', cat: 'Vocabulary', q: '"Alleviate" most nearly means ___.', options: ['reduce pain or difficulty', 'increase', 'ignore', 'destroy'], correct: 0 },
 { level: 'B2', cat: 'Grammar', q: 'I wish I ___ more time to study.', options: ['had', 'have', 'will have', 'am having'], correct: 0 },
 { level: 'B2', cat: 'Grammar', q: 'The project, ___ took two years, finally finished.', options: ['which', 'who', 'where', 'whose'], correct: 0 },
 { level: 'B2', cat: 'Grammar', q: 'They insisted on ___ us to dinner.', options: ['paying for', 'pay', 'paid', 'to pay'], correct: 0 },
 { level: 'B2', cat: 'Vocabulary', q: '"Adequate" means ___.', options: ['enough', 'too little', 'excessive', 'useless'], correct: 0 },
 { level: 'B2', cat: 'Vocabulary', q: '"Deteriorate" means to ___.', options: ['become worse', 'improve', 'remain', 'grow'], correct: 0 },
 { level: 'B2', cat: 'Vocabulary', q: 'An "authentic" product is ___.', options: ['genuine', 'fake', 'damaged', 'cheap'], correct: 0 },

 { level: 'C1', cat: 'Grammar', q: 'Not only ___ the exam, but she also got the highest score.', options: ['did she pass', 'she passed', 'she passes', 'passed she'], correct: 0 },
 { level: 'C1', cat: 'Grammar', q: 'The new policy is subject ___ approval.', options: ['to', 'for', 'on', 'of'], correct: 0 },
 { level: 'C1', cat: 'Grammar', q: '___ the bad weather, the event will take place.', options: ['Regardless of', 'Despite that', 'Even', 'In spite'], correct: 0 },
 { level: 'C1', cat: 'Grammar', q: 'He was accused ___ stealing company secrets.', options: ['of', 'for', 'with', 'in'], correct: 0 },
 { level: 'C1', cat: 'Vocabulary', q: 'A "meticulous" person is ___.', options: ['extremely careful', 'very lazy', 'always late', 'highly selfish'], correct: 0 },
 { level: 'C1', cat: 'Vocabulary', q: '"Ambiguous" information is ___.', options: ['unclear', 'outdated', 'accurate', 'irrelevant'], correct: 0 },
 { level: 'C1', cat: 'Vocabulary', q: '"Adept" means ___ at something.', options: ['skilled', 'clumsy', 'slow', 'lazy'], correct: 0 },
 { level: 'C1', cat: 'Vocabulary', q: '"Frugal" most nearly means ___.', options: ['economical', 'wasteful', 'generous', 'fearful'], correct: 0 },
 { level: 'C1', cat: 'Vocabulary', q: '"Prudent" means ___.', options: ['wise and careful', 'careless', 'rude', 'sudden'], correct: 0 },
 { level: 'C1', cat: 'Grammar', q: 'Only after the results were published ___ the mistake.', options: ['did they realize', 'they realized', 'they did realize', 'had they realized'], correct: 0 },
 { level: 'C1', cat: 'Grammar', q: 'The report was written ___ great care.', options: ['with', 'by', 'from', 'at'], correct: 0 },
 { level: 'C1', cat: 'Grammar', q: 'Were the weather ___ better, we would go hiking.', options: ['to be', 'be', 'been', 'being'], correct: 0 },
 { level: 'C1', cat: 'Vocabulary', q: '"Precipitous" most nearly means ___.', options: ['sudden and steep', 'slow and gentle', 'long and boring', 'clear and simple'], correct: 0 },
 { level: 'C1', cat: 'Vocabulary', q: 'To "mitigate" risks means to ___.', options: ['reduce them', 'increase them', 'ignore them', 'prove them'], correct: 0 },
 { level: 'C1', cat: 'Vocabulary', q: 'A "lucid" explanation is ___.', options: ['clear', 'confusing', 'lengthy', 'vague'], correct: 0 },

 { level: 'C2', cat: 'Grammar', q: 'Had it not been ___ your support, I would have failed.', options: ['for', 'of', 'with', 'to'], correct: 0 },
 { level: 'C2', cat: 'Grammar', q: 'She is a stickler ___ rules and regulations.', options: ['for', 'of', 'on', 'with'], correct: 0 },
 { level: 'C2', cat: 'Grammar', q: 'No sooner ___ the announcement than the crowd cheered.', options: ['had the officials made', 'the officials made', 'the officials had made', 'did the officials made'], correct: 0 },
 { level: 'C2', cat: 'Grammar', q: 'Much ___ his surprise, the project was approved.', options: ['to', 'for', 'in', 'by'], correct: 0 },
 { level: 'C2', cat: 'Vocabulary', q: 'The "quintessential" example is ___.', options: ['the most perfect example', 'a very rare example', 'the worst example', 'a simple example'], correct: 0 },
 { level: 'C2', cat: 'Vocabulary', q: '"Ephemeral" means lasting for ___.', options: ['a very short time', 'a century', 'ten years', 'an entire life'], correct: 0 },
 { level: 'C2', cat: 'Vocabulary', q: '"Obfuscate" means to ___.', options: ['make something unclear', 'simplify', 'clarify', 'praise'], correct: 0 },
 { level: 'C2', cat: 'Vocabulary', q: '"Pulchritudinous" is a fancy word for ___.', options: ['beautiful', 'ugly', 'strong', 'old'], correct: 0 },
 { level: 'C2', cat: 'Vocabulary', q: 'A "sycophant" is someone who ___.', options: ['flatters others to gain favor', 'tells lies in court', 'ignores everyone', 'works very slowly'], correct: 0 },
 { level: 'C2', cat: 'Grammar', q: 'Such was the demand ___ the tickets sold out in minutes.', options: ['that', 'so', 'which', 'as'], correct: 0 },
 { level: 'C2', cat: 'Grammar', q: 'The proposal is contingent ___ further funding.', options: ['upon', 'with', 'from', 'of'], correct: 0 },
 { level: 'C2', cat: 'Grammar', q: 'Barely ___ the speech when the audience applauded.', options: ['had she finished', 'she finished', 'she had finished', 'did she finished'], correct: 0 },
 { level: 'C2', cat: 'Vocabulary', q: '"Inscrutable" most nearly means ___.', options: ['impossible to understand', 'easy to read', 'very famous', 'extremely large'], correct: 0 },
 { level: 'C2', cat: 'Vocabulary', q: 'To "repudiate" a claim is to ___.', options: ['reject it', 'accept it', 'repeat it', 'investigate it'], correct: 0 },
 { level: 'C2', cat: 'Vocabulary', q: 'A "verbose" writer uses ___.', options: ['too many words', 'very few words', 'no words', 'only pictures'], correct: 0 }
];

var LEVEL_RANK = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
var LEVELS_ASC = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

var CAT_INFO = {
 'Grammar': { label: 'Grammar', cls: 'g' },
 'Vocabulary': { label: 'Vocabulary', cls: 'v' },
 'General': { label: 'General Knowledge', cls: 'g' },
 'Sciences': { label: 'Science', cls: 'g' },
 'Technology': { label: 'Technology', cls: 'v' },
 'Business': { label: 'Business', cls: 'v' },
 'Geography': { label: 'Geography', cls: 'g' },
 'Reading': { label: 'Reading', cls: 'rd' }
};

var READING_PASSAGES = [
 {
 level: 'A1',
 title: 'My Dog Leo',
 text: 'This is my dog. His name is Leo. He is black and white. Leo is three years old. He likes to run in the park and play with a ball. Every day I take Leo for a walk in the morning. He is my best friend.',
 questions: [
 { q: 'What is the dog\'s name?', options: ['Leo', 'Max', 'Tom', 'Sam'], correct: 0 },
 { q: 'How old is Leo?', options: ['Three', 'Two', 'Four', 'Five'], correct: 0 },
 { q: 'Where does the writer take Leo?', options: ['To the park', 'To school', 'To the shop', 'To work'], correct: 0 }
 ]
 },
 {
 level: 'A2',
 title: 'Omar\'s Day',
 text: 'My name is Omar and I am fifteen years old. I live in Alexandria with my parents and my little sister. Every morning, I wake up at seven o\'clock, take a shower, and eat breakfast. Then I go to school by bicycle because the school is near our house. I like science best, but I also enjoy playing football after school with my friends. In the evening, I help my mother and finish my homework before dinner.',
 questions: [
 { q: 'How old is Omar?', options: ['Fifteen', 'Twelve', 'Ten', 'Eighteen'], correct: 0 },
 { q: 'How does Omar go to school?', options: ['By bicycle', 'By bus', 'On foot', 'By car'], correct: 0 },
 { q: 'Which subject does Omar like best?', options: ['Science', 'Math', 'English', 'History'], correct: 0 }
 ]
 },
 {
 level: 'B1',
 title: 'Working From Home',
 text: 'Working from home has become much more common in recent years. Many people say it saves time and money because they do not need to travel to an office every day. They can also spend more time with their families. However, working from home is not always easy. Some people find it difficult to stay focused with so many distractions at home, and others miss the social contact with their colleagues. Experts say the key is to create a clear daily routine and a separate working space.',
 questions: [
 { q: 'What is one advantage of working from home mentioned in the text?', options: ['Saving time and money', 'Getting a higher salary', 'Working fewer hours', 'No need for a computer'], correct: 0 },
 { q: 'Why do some people find working from home difficult?', options: ['Too many distractions at home', 'The office is too far', 'Their computer is old', 'The weather is bad'], correct: 0 },
 { q: 'What do experts suggest doing?', options: ['Create a daily routine and a separate working space', 'Work in the kitchen', 'Travel more to offices', 'Avoid all technology'], correct: 0 }
 ]
 },
 {
 level: 'B2',
 title: 'Urban Farming',
 text: 'Urban farming is turning empty rooftops and unused land into green spaces where communities grow their own vegetables. Supporters argue that it reduces the distance food travels to the consumer, lowers prices during shortages, and educates children about where food comes from. Critics, however, point out that rooftop farms can be expensive to build and maintain, and that they produce only a small fraction of a city\'s food needs. Even so, many planners now see urban farming not as a replacement for traditional agriculture, but as an important complement to it.',
 questions: [
 { q: 'What is one benefit of urban farming mentioned in the text?', options: ['It reduces the distance food travels', 'It replaces traditional farming', 'It is free to build', 'It makes food more expensive'], correct: 0 },
 { q: 'What criticism is raised against rooftop farms?', options: ['They are expensive and produce little food', 'They need too much land', 'They use only chemicals', 'They employ too many people'], correct: 0 },
 { q: 'How do planners generally view urban farming now?', options: ['As a complement to traditional agriculture', 'As the only solution', 'As a passing trend', 'As something for decoration'], correct: 0 }
 ]
 },
 {
 level: 'C1',
 title: 'Who Is Responsible for AI?',
 text: 'Artificial intelligence is transforming industries, but it also raises serious questions about accountability. When an algorithm makes a decision that harms a customer — denying a loan, for instance — who is responsible? The developer? The company? The machine itself? Legal systems have not yet caught up with these dilemmas. Some scholars argue that we already treat corporations as legal persons, so it is not unreasonable to consider granting digital systems a limited form of legal responsibility. Others counter that machines cannot be penalized in any meaningful way, making transparent, human oversight the only effective safeguard. What seems certain is that this debate will shape regulations for decades to come.',
 questions: [
 { q: 'What is the main concern raised about AI decisions in the text?', options: ['Who is responsible when an AI harms someone', 'That AI is too slow', 'That AI is too expensive', 'That AI may replace lawyers'], correct: 0 },
 { q: 'Why do some scholars think AI could have legal responsibility?', options: ['Because corporations are already treated as legal persons', 'Because machines can pay fines', 'Because AI is alive', 'Because the laws are complete'], correct: 0 },
{ q: 'What do opponents say is the only effective safeguard?', options: ['Transparent human oversight', 'Banning all algorithms', 'Making machines pay compensation', 'Ignoring the problem'], correct: 0 }
 ]
 },
 {
 level: 'A1',
 title: 'The Park',
 text: 'There is a small park near my house. On Friday, I go there with my brother. We play football and eat ice cream. My mother likes the flowers in the park. My father sits and reads the newspaper under a big tree. We stay for two hours and then walk home together.',
 questions: [
 { q: 'When does the writer go to the park?', options: ['On Friday', 'On Monday', 'In winter', 'At night'], correct: 0 },
 { q: 'What do they do at the park?', options: ['Play football and eat ice cream', 'Play computer games', 'Go swimming', 'Watch a film'], correct: 0 },
 { q: 'What does the father do in the park?', options: ['Reads the newspaper', 'Plays football', 'Sells ice cream', 'Runs slowly'], correct: 0 }
 ]
 },
 {
 level: 'A2',
 title: 'Sara\'s Morning',
 text: 'Sara works at a small bakery near the centre of the city. Every morning she wakes up at half past five, drinks a cup of tea, and walks to the shop. At the bakery she helps her manager prepare fresh bread for the customers. The shop opens at eight o\'clock. Sara likes her job because she meets many friendly people every day.',
 questions: [
 { q: 'What time does Sara wake up?', options: ['At half past five', 'At eight o\'clock', 'At noon', 'At half past seven'], correct: 0 },
 { q: 'How does Sara get to the bakery?', options: ['She walks', 'She drives', 'She takes a bus', 'She rides a bike'], correct: 0 },
 { q: 'Why does Sara like her job?', options: ['She meets friendly people', 'She earns a lot of money', 'She works at night', 'She travels a lot'], correct: 0 }
 ]
 },
 {
 level: 'B1',
 title: 'Learning a New Language',
 text: 'Learning a new language takes time, but the benefits are worth the effort. Studies show that bilingual people often find it easier to solve problems and focus on tasks. One of the keys to success is consistency: practising for twenty minutes every day works better than studying for three hours once a week. Learners also improve faster when they use the language in real situations, such as talking with native speakers or watching films without subtitles. Mistakes are part of the process, so the best advice is simple: keep going.',
 questions: [
 { q: 'What is one benefit of being bilingual mentioned in the text?', options: ['Easier problem solving and focus', 'A higher salary', 'More free time', 'Better memory for names'], correct: 0 },
 { q: 'Why is daily practice better than long weekly sessions?', options: ['Consistency works better', 'It is cheaper', 'It requires no teacher', 'It uses less energy'], correct: 0 },
 { q: 'What does the text say about mistakes?', options: ['They are part of the process', 'They should be avoided', 'They show a lack of talent', 'They are only for beginners'], correct: 0 }
 ]
 },
 {
 level: 'B1',
 title: 'The Power of Habits',
 text: 'Most of our daily actions are not decisions; they are habits. Scientists explain that a habit has three parts: a cue, a routine, and a reward. The cue tells your brain to start, the routine is the action itself, and the reward is the benefit you feel afterwards. To build a good habit, experts suggest starting small. For example, instead of aiming to exercise for an hour, begin with five minutes a day. Once the habit is established, it becomes automatic and you can slowly make it bigger.',
 questions: [
 { q: 'What are the three parts of a habit?', options: ['A cue, a routine, and a reward', 'A goal, a plan, and a prize', 'A start, a middle, and an end', 'A thought, a word, and an action'], correct: 0 },
 { q: 'What do experts suggest when building a good habit?', options: ['Start small', 'Start big', 'Skip the reward', 'Avoid routines'], correct: 0 },
 { q: 'What happens once a habit is established?', options: ['It becomes automatic', 'It disappears', 'It needs a reward', 'It becomes a decision'], correct: 0 }
 ]
 },
 {
 level: 'B2',
 title: 'The Gig Economy',
 text: 'The gig economy describes a labour market where workers take short-term, flexible jobs instead of permanent positions. Supporters say this freedom lets people choose when and how much they work, and it can be a useful way to earn extra income. Critics argue that gig workers often lack benefits such as healthcare and paid holidays, and that their income can be unpredictable. Many governments are now debating whether gig workers should receive the same protections as full-time employees, a question that is unlikely to disappear as this type of work keeps growing.',
 questions: [
 { q: 'What is the gig economy?', options: ['A market of short-term, flexible jobs', 'A market for permanent jobs', 'A type of government benefit', 'A system of free training'], correct: 0 },
 { q: 'What is one criticism of gig work mentioned in the text?', options: ['Workers often lack benefits', 'Workers earn too much', 'Workers get too many holidays', 'Workers cannot choose their hours'], correct: 0 },
 { q: 'What are governments debating?', options: ['Whether gig workers should get full-time protections', 'Whether gig work is legal', 'How to ban gig companies', 'How to lower gig incomes'], correct: 0 }
 ]
 },
 {
 level: 'C1',
 title: 'The Misuse of Statistics',
 text: 'Statistics are often presented as neutral facts, yet they can be shaped to serve almost any argument. A company may report that "nine out of ten customers are satisfied" without explaining how the question was asked or who was surveyed. Three common distortions deserve attention: cherry-picking data, using misleading averages, and confusing correlation with causation. Cherry-picking happens when only favourable results are shown, while misleading averages can hide a very uneven distribution. The most damaging error is the assumption that because two things change together, one causes the other. Careful readers should always ask three questions: who collected the data, how it was collected, and what is missing from the picture.',
 questions: [
 { q: 'What is cherry-picking data?', options: ['Showing only favourable results', 'Choosing fresh vegetables', 'Picking random samples', 'Counting every result twice'], correct: 0 },
 { q: 'Which error does the text call the most damaging?', options: ['Confusing correlation with causation', 'Using too few numbers', 'Asking too many questions', 'Surveying happy customers'], correct: 0 },
 { q: 'What should careful readers ask about data?', options: ['Who collected it, how, and what is missing', 'How long it took and who paid', 'Whether it is printed or digital', 'Which company owns the software'], correct: 0 }
 ]
 },
 {
 level: 'C2',
 title: 'The Conquest of Certainty',
 text: 'Modern science is sometimes described as a search for certainty, yet its greatest discoveries have often begun with doubt. Newtonian physics appeared absolute until Einstein\'s theory of relativity reshaped our understanding of space and time; quantum mechanics then challenged the very idea of a predictable universe. Far from revealing weakness, this openness to revision is science\'s greatest strength. A scientific claim earns respect not because it is immune to error, but precisely because it remains exposed to refutation. The intellectual humility that admits "we might be wrong" is not a concession of defeat; it is the engine that has driven every genuine advance, from medicine to engineering.',
 questions: [
 { q: 'What does the text say about science\'s greatest discoveries?', options: ['They often began with doubt', 'They began with absolute laws', 'They rejected quantum mechanics', 'They avoided revision'], correct: 0 },
 { q: 'Why does a scientific claim earn respect?', options: ['Because it remains open to refutation', 'Because it is never wrong', 'Because it is simple', 'Because it is ancient'], correct: 0 },
 { q: 'Which quotation best captures the author\'s view?', options: ['"We might be wrong" is the engine of progress', '"Science seeks absolute certainty"', '"Doubt reveals weakness"', '"Laws of nature never change"'], correct: 0 }
 ]
 }
 ];

var LEVEL_INFO = {
 'A1': { title: 'Beginner', ring: '#10B981', desc: 'Great start! You can understand basic words and simple sentences. Now let\'s build your foundation in everyday vocabulary and basic grammar.', skills: ['Basic greetings and introductions', 'Simple present tense ("I am", "She is")', 'Numbers, colors, days of the week', 'Very common words and phrases', 'Simple questions and answers'], focus: ['Learn the 500 most common English words', 'Master "to be", the present simple and basic questions', 'Practise everyday phrases: shopping, food, travel, family', 'Listen to slow, simple English every day'], next: 'A2 — Elementary: handle simple everyday situations and past tenses' },
 'A2': { title: 'Elementary', ring: '#3B82F6', desc: 'Nice work! You handle simple everyday situations. Let\'s expand your vocabulary and move into past tenses and real-life conversations.', skills: ['Past and present tenses', 'Shopping, food, travel vocabulary', 'Simple descriptions of people and places', 'Understanding short, clear messages', 'Everyday conversations'], focus: ['Move confidently into the past and future tenses', 'Practise ordering, asking directions and small talk', 'Describe people, places and routines in detail', 'Start reading short articles and simple stories'], next: 'B1 — Intermediate: express opinions and handle travel situations' },
 'B1': { title: 'Intermediate', ring: '#8B5CF6', desc: 'Solid level! You can express opinions and handle travel situations. Next step: more complex grammar, professional vocabulary, and confident speech.', skills: ['Express opinions and plans', 'Describe experiences and events', 'Handle most travel situations', 'Write simple connected texts', 'Follow clear, standard speech'], focus: ['Learn conditionals, relative clauses and phrasal verbs', 'Build professional and formal vocabulary', 'Practise giving opinions and presenting ideas clearly', 'Write structured paragraphs: introduction, body, conclusion'], next: 'B2 — Upper Intermediate: discuss complex topics and write well-structured texts' },
 'B2': { title: 'Upper Intermediate', ring: '#F97316', desc: 'Impressive! You can handle complex topics and interact fluently. Polish your professional English and advanced writing to stand out at work.', skills: ['Discuss complex and abstract topics', 'Fluency and spontaneity in conversation', 'Detailed, well-structured writing', 'Understanding longer texts and news', 'Professional and academic English'], focus: ['Master advanced grammar: inversions, modals of deduction, reported speech', 'Learn idiomatic expressions and collocations', 'Practise writing reports, emails and essays with clear arguments', 'Listen to podcasts and news for advanced listening skills'], next: 'C1 — Advanced: fluent, flexible English for academic and professional use' },
 'C1': { title: 'Advanced', ring: '#EC4899', desc: 'Excellent! You communicate fluently and flexibly. You\'re essentially ready for academic and professional English — sharpen your precision and style.', skills: ['Express ideas fluently and flexibly', 'Use language for social and academic purposes', 'Produce clear, detailed, complex texts', 'Understand extended arguments', 'Precise and idiomatic expression'], focus: ['Fine-tune nuance, idiomatic expression and register', 'Practise academic writing and formal debate', 'Master subtle collocations and stylistic variation', 'Read literature, editorials and research summaries'], next: 'C2 — Proficient: near-native mastery and total precision' },
 'C2': { title: 'Proficient', ring: '#EF4444', desc: 'Outstanding! You understand virtually everything and express yourself precisely. You\'re at a native-level mastery.', skills: ['Understand virtually everything heard or read', 'Summarize information from many sources', 'Express yourself with total precision', 'Handle academic and legal English', 'Native-level fluency and nuance'], focus: ['Maintain precision under pressure: meetings, negotiations, pitches', 'Style-shift between formal, academic, and casual English', 'Expand into specialised fields (law, medicine, finance)', 'Coach others and refine your personal writing voice'], next: 'No level above C2 — maintain excellence and teach what you know' }
};

var ADVANCED_WORDS = ['opportunity', 'challenging', 'ambitious', 'significant', 'furthermore', 'therefore', 'however', 'although', 'experience', 'develop', 'achieve', 'professional', 'enthusiastic', 'essential', 'improve', 'skill', 'career', 'motivated', 'especially', 'different', 'important', 'because', 'believe', 'interesting', 'technology', 'application', 'solution', 'creative', 'successful', 'company', 'management', 'competition', 'participate', 'responsible', 'visit', 'journey', 'vacation', 'consider', 'encourage', 'environment', 'aspect', 'contribute', 'remarkable', 'inspiring', 'delighted'];
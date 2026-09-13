var GYM_GOALS = [
 { id: 'muscle_gain', label: 'Build Muscle', short: 'Muscle Gain', desc: 'Hypertrophy, size & definition' },
 { id: 'lose_fat', label: 'Lose Fat', short: 'Fat Loss', desc: 'Burn fat, keep muscle' },
 { id: 'gain_weight', label: 'Gain Weight', short: 'Weight Gain', desc: 'Add healthy mass & strength' },
 { id: 'strength', label: 'Get Stronger', short: 'Strength', desc: 'Maximal compound strength' },
 { id: 'fitness', label: 'Improve Fitness', short: 'Fitness', desc: 'Conditioning, health & energy' }
];

var GYM_LEVELS = [
 { id: 'beginner', label: 'Beginner', desc: 'New or returning after a long break' },
 { id: 'intermediate', label: 'Intermediate', desc: '1–2 years of consistent training' },
 { id: 'advanced', label: 'Advanced', desc: '3+ years, strong control of form' }
];

var GYM_DAYS_OPTIONS = [3, 4, 5, 6];

var GYM_PLACES = [
 { id: 'gym', label: 'At the Gym', desc: 'Full equipment — barbells, cables & machines' },
 { id: 'home', label: 'At Home', desc: 'Bodyweight & minimal equipment' }
];

var GYM_GENDERS = [
 { id: 'male', label: 'Male', },
 { id: 'female', label: 'Female', }
];

var GYM_ACTIVITY = [
 { id: 'sedentary', label: 'Mostly sitting', factor: 1.2 },
 { id: 'light', label: 'Light activity', factor: 1.375 },
 { id: 'moderate', label: 'Moderately active', factor: 1.55 },
 { id: 'active', label: 'Very active', factor: 1.725 }
];

var GYM_DIETS = [
 { id: 'none', label: 'No restrictions', },
 { id: 'vegetarian', label: 'Vegetarian', },
 { id: 'no_dairy', label: 'No dairy', },
 { id: 'low_carb', label: 'Lower carb', }
];

var GYM_GOAL_PROFILE = {
 muscle_gain: { repRange: '8–12', restSec: 90, restLabel: '90 sec', extraSets: 0, finisher: null, note: 'Hypertrophy focus — controlled tempo, squeeze the muscle, form over speed.' },
 lose_fat: { repRange: '12–15', restSec: 60, restLabel: '60 sec', extraSets: 0, finisher: { label: 'Cardio Finisher', desc: 'Finish every session with 10–15 min of steady cardio: treadmill, cycling, or jump rope.' }, note: 'Keep intensity high, track calories, and move daily outside training too.' },
 gain_weight: { repRange: '6–10', restSec: 90, restLabel: '90 sec', extraSets: 1, finisher: null, note: 'Eat in a surplus, sleep well, and push the compound lifts progressively.' },
 strength: { repRange: '4–6', restSec: 150, restLabel: '150 sec', extraSets: 2, finisher: null, note: 'Strength focus — heavy sets, long rest, maximal effort on the big lifts.' },
 fitness: { repRange: '10–15', restSec: 45, restLabel: '45 sec', extraSets: 0, finisher: { label: 'Conditioning Finisher', desc: 'Finish with 8–12 min: 30s of work (jump rope, mountain climbers, burpees) / 30s rest.' }, note: 'General conditioning — mix strength work with short cardio bursts.' }
};

var EXERCISES = [
 { id: 'bench_press', name: 'Bench Press', group: 'chest', primary: 'Chest', secondary: ['Triceps', 'Front Deltoids'], equipment: 'gym', diff: 1, priority: 0, sets: 4, rest: 90, video: 'bench press form barbell', instructions: ['Lie on a flat bench, feet planted, shoulder blades pinched', 'Grip the bar slightly wider than shoulder width', 'Lower the bar to mid-chest with control', 'Press back up and lock out without shrugging'] },
 { id: 'incline_dumbbell_press', name: 'Incline Dumbbell Press', group: 'chest', primary: 'Chest (Upper)', secondary: ['Triceps', 'Front Deltoids'], equipment: 'both', diff: 1, priority: 0, sets: 3, rest: 90, video: 'incline dumbbell press form', instructions: ['Set an incline bench to 30–45 degrees', 'Press the dumbbells up above your chest', 'Lower until you feel a stretch in the upper chest', 'Drive up and slightly together at the top'] },
 { id: 'dumbbell_fly', name: 'Dumbbell Fly', group: 'chest', primary: 'Chest', secondary: ['Front Deltoids'], equipment: 'both', diff: 1, priority: 1, sets: 3, rest: 75, video: 'dumbbell fly form chest', instructions: ['Lie flat, dumbbells pressed above the chest', 'Open the arms with slightly bent elbows', 'Lower until a comfortable stretch', 'Squeeze the chest to bring the weights back together'] },
 { id: 'cable_fly', name: 'Cable Fly', group: 'chest', primary: 'Chest', secondary: ['Front Deltoids'], equipment: 'gym', diff: 1, priority: 1, sets: 3, rest: 75, video: 'cable fly form chest', instructions: ['Set both pulleys at shoulder height', 'Step forward with a slight forward lean', 'Arc the handles together in front of your chest', 'Squeeze for a second, then open slowly'] },
 { id: 'push_up', name: 'Push-Up', group: 'chest', primary: 'Chest', secondary: ['Triceps', 'Core'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 60, video: 'push up correct form', instructions: ['Set hands slightly wider than shoulders, body in a straight line', 'Brace the core and lower until the chest nears the floor', 'Keep elbows about 45° from the body', 'Press back up to full arm extension'] },
 { id: 'incline_push_up', name: 'Incline Push-Up', group: 'chest', primary: 'Chest', secondary: ['Triceps', 'Core'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 60, video: 'incline push up form', instructions: ['Place hands on a bench, table, or wall', 'Keep the body straight from head to heels', 'Lower the chest toward the support', 'Press back up with control'] },
 { id: 'deadlift', name: 'Deadlift', group: 'back', primary: 'Back (Lower)', secondary: ['Glutes', 'Hamstrings', 'Core'], equipment: 'gym', diff: 2, priority: 0, sets: 4, rest: 150, video: 'deadlift form setup', instructions: ['Stand mid-foot over the bar and hinge down to grip it', 'Flatten the back, brace the core, pull the slack out', 'Drive through the floor and stand tall with the bar close', 'Lower with control, pushing the hips back'] },
 { id: 'pull_up', name: 'Pull-Up', group: 'back', primary: 'Back (Lats)', secondary: ['Biceps', 'Core'], equipment: 'both', diff: 1, priority: 0, sets: 3, rest: 90, video: 'pull up form for beginners', instructions: ['Hang from the bar with an overhand grip', 'Pull your chest toward the bar, elbows down', 'Aim your chin above the bar', 'Lower with control to a full hang'] },
 { id: 'lat_pulldown', name: 'Lat Pulldown', group: 'back', primary: 'Back (Lats)', secondary: ['Biceps'], equipment: 'gym', diff: 0, priority: 0, sets: 3, rest: 75, video: 'lat pulldown form', instructions: ['Sit and anchor your thighs under the pads', 'Grip the bar wider than shoulders', 'Pull the bar to the top of your chest', 'Lean back slightly and squeeze the lats down'] },
 { id: 'seated_cable_row', name: 'Seated Cable Row', group: 'back', primary: 'Back (Mid)', secondary: ['Biceps', 'Rear Deltoids'], equipment: 'gym', diff: 1, priority: 0, sets: 3, rest: 75, video: 'seated cable row form', instructions: ['Sit tall with slightly bent knees', 'Pull the handle toward your belly button', 'Squeeze your shoulder blades together', 'Let your arms extend forward with control'] },
 { id: 'barbell_row', name: 'Barbell Bent-Over Row', group: 'back', primary: 'Back', secondary: ['Biceps', 'Rear Deltoids'], equipment: 'gym', diff: 1, priority: 0, sets: 3, rest: 90, video: 'barbell bent over row form', instructions: ['Hinge forward to about 45°, back flat', 'Pull the bar to your lower ribs', 'Keep elbows close to the body', 'Lower the bar under control'] },
 { id: 'dumbbell_row', name: 'One-Arm Dumbbell Row', group: 'back', primary: 'Back', secondary: ['Biceps', 'Core'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 75, video: 'one arm dumbbell row form', instructions: ['Knee and hand on a bench, back flat', 'Pull the dumbbell to your hip area', 'Squeeze the back at the top', 'Lower under control, then switch sides'] },
 { id: 'bodyweight_row', name: 'Bodyweight Row (Inverted)', group: 'back', primary: 'Back', secondary: ['Biceps', 'Rear Deltoids'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 75, video: 'inverted row form', instructions: ['Set a bar or sturdy table at waist height', 'Hold it and walk your feet forward, body straight', 'Pull your chest toward the bar', 'Lower with control to a full hang'] },
 { id: 'overhead_press', name: 'Overhead Press', group: 'shoulders', primary: 'Shoulders (Front & Side)', secondary: ['Triceps', 'Upper Chest'], equipment: 'gym', diff: 1, priority: 0, sets: 3, rest: 120, video: 'barbell overhead press form', instructions: ['Hold the bar at shoulder height, forearms vertical', 'Squeeze the glutes and brace the core', 'Press the bar overhead until arms lock out', 'Lower back to the shoulders with control'] },
 { id: 'dumbbell_shoulder_press', name: 'Seated Dumbbell Shoulder Press', group: 'shoulders', primary: 'Shoulders', secondary: ['Triceps'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 90, video: 'seated dumbbell shoulder press form', instructions: ['Sit with back support, dumbbells at ear height', 'Press the dumbbells overhead together', 'Stop just short of a hard lockout', 'Lower slowly to ear height'] },
 { id: 'lateral_raise', name: 'Dumbbell Lateral Raise', group: 'shoulders', primary: 'Shoulders (Side)', secondary: ['Trapezius'], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 60, video: 'lateral raise form mistakes', instructions: ['Stand with a slight forward lean', 'Raise the dumbbells out to shoulder height', 'Lead with the elbows, little finger up', 'Lower slowly — avoid swinging'] },
 { id: 'rear_delt_fly', name: 'Rear Delt Fly', group: 'shoulders', primary: 'Rear Deltoids', secondary: ['Upper Back'], equipment: 'both', diff: 1, priority: 1, sets: 3, rest: 60, video: 'rear delt fly form', instructions: ['Hinge forward until your torso is near parallel', 'With light dumbbells, open the arms out to the sides', 'Squeeze the rear delts together', 'Lower under control'] },
 { id: 'pike_push_up', name: 'Pike Push-Up', group: 'shoulders', primary: 'Shoulders', secondary: ['Triceps'], equipment: 'both', diff: 1, priority: 0, sets: 3, rest: 75, video: 'pike push up form', instructions: ['Get into a push-up position and lift the hips high', 'Bend the elbows to lower the top of your head', 'Press back up to the pike position', 'Keep the legs straight and hips high'] },
 { id: 'face_pull', name: 'Face Pull', group: 'shoulders', primary: 'Rear Deltoids', secondary: ['Trapezius', 'Rotator Cuff'], equipment: 'gym', diff: 1, priority: 1, sets: 3, rest: 60, video: 'face pull form', instructions: ['Set a rope at upper-chest height', 'Pull it toward your face, elbows high and out', 'Rotate the shoulders outward at the end', 'Return slowly under control'] },
 { id: 'barbell_curl', name: 'Barbell Curl', group: 'biceps', primary: 'Biceps', secondary: ['Forearms'], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 60, video: 'barbell curl form', instructions: ['Stand with the bar at hip height, elbows tucked', 'Curl the bar up while keeping elbows still', 'Squeeze the biceps at the top', 'Lower slowly — no swinging'] },
 { id: 'dumbbell_curl', name: 'Hammer Curl', group: 'biceps', primary: 'Biceps (Brachialis)', secondary: ['Forearms'], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 60, video: 'hammer curl form', instructions: ['Hold dumbbells with a neutral (palms-in) grip', 'Curl them up keeping the palms facing each other', 'Squeeze at the top', 'Lower under control'] },
 { id: 'cable_curl', name: 'Cable Curl', group: 'biceps', primary: 'Biceps', secondary: ['Forearms'], equipment: 'gym', diff: 0, priority: 1, sets: 3, rest: 60, video: 'cable curl form biceps', instructions: ['Stand facing the low pulley with a straight bar', 'Curl the bar without moving your elbows', 'Squeeze the biceps at the top', 'Return slowly to a full stretch'] },
 { id: 'triceps_pushdown', name: 'Triceps Pushdown', group: 'triceps', primary: 'Triceps', secondary: [], equipment: 'gym', diff: 0, priority: 1, sets: 3, rest: 60, video: 'triceps pushdown form', instructions: ['Face the high pulley, elbows pinned at your sides', 'Push the bar down until arms are straight', 'Squeeze the triceps', 'Return slowly so the arms reach 90° at the top'] },
 { id: 'overhead_triceps_extension', name: 'Overhead Triceps Extension', group: 'triceps', primary: 'Triceps', secondary: [], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 60, video: 'overhead tricep extension form', instructions: ['Hold one dumbbell with both hands above your head', 'Lower it behind your head by bending the elbows', 'Keep the upper arms still', 'Extend back up to a straight arm'] },
 { id: 'close_grip_press', name: 'Close-Grip Bench Press', group: 'triceps', primary: 'Triceps', secondary: ['Chest', 'Front Deltoids'], equipment: 'gym', diff: 1, priority: 0, sets: 3, rest: 90, video: 'close grip bench press form', instructions: ['Grip the bar shoulder-width or narrower', 'Lower the bar to the lower chest', 'Keep elbows tucked through the whole press', 'Drive the bar back up'] },
 { id: 'bench_dips', name: 'Bench Dips', group: 'triceps', primary: 'Triceps', secondary: ['Chest', 'Front Deltoids'], equipment: 'home', diff: 0, priority: 0, sets: 3, rest: 60, video: 'bench dips form triceps', instructions: ['Place hands behind you on a stable bench', 'Walk the feet forward, hips off the bench', 'Bend the elbows to lower your hips', 'Press back up with straight arms'] },
 { id: 'diamond_push_up', name: 'Diamond Push-Up', group: 'triceps', primary: 'Triceps', secondary: ['Chest', 'Core'], equipment: 'both', diff: 1, priority: 0, sets: 3, rest: 75, video: 'diamond push up form', instructions: ['Place hands close together under your chest', 'Form a diamond shape with thumbs and index fingers', 'Lower the chest to your hands', 'Press back up keeping the body straight'] },
 { id: 'back_squat', name: 'Barbell Back Squat', group: 'quads', primary: 'Quads', secondary: ['Glutes', 'Hamstrings', 'Core'], equipment: 'gym', diff: 1, priority: 0, sets: 4, rest: 120, video: 'barbell back squat form', instructions: ['Set the bar on your upper back and brace', 'Bend the knees and hips as if sitting back', 'Squat to at least parallel with knees tracking over toes', 'Drive up through mid-foot and squeeze the glutes'] },
 { id: 'goblet_squat', name: 'Goblet Squat', group: 'quads', primary: 'Quads', secondary: ['Glutes', 'Core'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 90, video: 'goblet squat form', instructions: ['Hold one dumbbell close to your chest', 'Squat down until your thighs are parallel or lower', 'Push the knees out, chest up', 'Drive back up through your heels'] },
 { id: 'leg_press', name: 'Leg Press', group: 'quads', primary: 'Quads', secondary: ['Glutes'], equipment: 'gym', diff: 0, priority: 0, sets: 4, rest: 90, video: 'leg press form machine', instructions: ['Sit with your feet shoulder-width on the platform', 'Lower the platform until knees reach ~90°', 'Keep the lower back glued to the pad', 'Press up without locking the knees'] },
 { id: 'walking_lunge', name: 'Walking Lunges', group: 'quads', primary: 'Quads', secondary: ['Glutes', 'Hamstrings'], equipment: 'both', diff: 1, priority: 0, sets: 3, rest: 90, video: 'walking lunge form', instructions: ['Take a long step forward and lower the back knee', 'Keep the front knee above the front ankle', 'Push off the front foot into the next step', 'Keep the torso tall throughout'] },
 { id: 'bodyweight_squat', name: 'Bodyweight Squat', group: 'quads', primary: 'Quads', secondary: ['Glutes', 'Core'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 75, video: 'bodyweight squat form', instructions: ['Stand with feet shoulder-width apart', 'Sit back and down until thighs are parallel', 'Keep the chest up and heels down', 'Stand back up tall'] },
 { id: 'romanian_deadlift', name: 'Romanian Deadlift', group: 'hamstrings', primary: 'Hamstrings', secondary: ['Glutes', 'Lower Back'], equipment: 'gym', diff: 0, priority: 0, sets: 3, rest: 120, video: 'romanian deadlift form', instructions: ['Hold the bar at hip height, knees slightly bent', 'Push the hips back, keeping the back flat', 'Lower the bar down your thighs to mid-shin', 'Squeeze the glutes to return to standing'] },
 { id: 'leg_curl', name: 'Lying Leg Curl', group: 'hamstrings', primary: 'Hamstrings', secondary: ['Calves'], equipment: 'gym', diff: 0, priority: 1, sets: 3, rest: 75, video: 'lying leg curl form', instructions: ['Lie face down with the pad above your heels', 'Curl the heels toward the glutes', 'Pause and squeeze the hamstrings', 'Return slowly under control'] },
 { id: 'glute_bridge', name: 'Glute Bridge', group: 'glutes', primary: 'Glutes', secondary: ['Hamstrings', 'Core'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 60, video: 'glute bridge form', instructions: ['Lie on your back, knees bent, feet flat', 'Push through the heels to lift the hips', 'Squeeze the glutes at the top', 'Lower with control'] },
 { id: 'hip_thrust', name: 'Hip Thrust', group: 'glutes', primary: 'Glutes', secondary: ['Hamstrings'], equipment: 'both', diff: 0, priority: 0, sets: 3, rest: 90, video: 'hip thrust form', instructions: ['Rest your upper back on a bench, bar or plate on hips', 'Drive through the heels to lift the hips', 'Squeeze the glutes hard at the top', 'Lower slowly and repeat'] },
 { id: 'standing_calf_raise', name: 'Standing Calf Raise', group: 'calves', primary: 'Calves', secondary: [], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 60, video: 'standing calf raise form', instructions: ['Stand on the edge of a step or platform', 'Lower the heels below the edge for a stretch', 'Rise onto your toes as high as possible', 'Pause at the top, then lower slowly'] },
 { id: 'seated_calf_raise', name: 'Seated Calf Raise', group: 'calves', primary: 'Calves', secondary: [], equipment: 'gym', diff: 0, priority: 1, sets: 3, rest: 60, video: 'seated calf raise form', instructions: ['Sit on the machine with the pads on top of the knees', 'Lower the heels to feel a stretch', 'Raise onto the toes as high as possible', 'Pause briefly at the top'] },
 { id: 'plank', name: 'Plank', group: 'core', primary: 'Core', secondary: ['Shoulders'], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 45, video: 'plank form how to', instructions: ['Forearms on the floor, body in a straight line', 'Brace the core and squeeze the glutes', 'Hold without letting the hips sag', 'Breath steadily through the hold'] },
 { id: 'russian_twist', name: 'Russian Twist', group: 'core', primary: 'Core (Obliques)', secondary: [], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 45, video: 'russian twist form', instructions: ['Sit with knees bent, feet up, lean back slightly', 'Rotate the torso side to side', 'Touch the floor beside your hip each side', 'Keep the chest tall and shoulders relaxed'] },
 { id: 'leg_raise', name: 'Leg Raise', group: 'core', primary: 'Core (Lower Abs)', secondary: ['Hip Flexors'], equipment: 'both', diff: 1, priority: 1, sets: 3, rest: 60, video: 'leg raise form abs', instructions: ['Lie flat with legs straight, hands by your sides', 'Raise the legs to about 90°', 'Lower slowly without touching the floor', 'Keep the lower back pressed down'] },
 { id: 'crunch', name: 'Crunch', group: 'core', primary: 'Core', secondary: [], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 45, video: 'crunch form abs', instructions: ['Lie with knees bent and hands at your temples', 'Curl the shoulders off the floor', 'Exhale and squeeze the abs at the top', 'Lower slowly with control'] },
 { id: 'mountain_climber', name: 'Mountain Climbers', group: 'core', primary: 'Core', secondary: ['Shoulders', 'Full Body'], equipment: 'both', diff: 0, priority: 1, sets: 3, rest: 45, video: 'mountain climbers form', instructions: ['Start in a high plank position', 'Drive one knee toward the chest', 'Switch legs quickly in a running motion', 'Keep the hips level and core tight'] },
 { id: 'treadmill_walk', name: 'Treadmill Walk', group: 'cardio', primary: 'Cardio (Steady)', secondary: [], equipment: 'gym', diff: 0, priority: 1, sets: 1, rest: 30, video: 'treadmill walking incline tips', instructions: ['Set a brisk pace with a slight incline', 'Keep an upright posture and swing the arms', 'Maintain a pace that lets you hold a conversation', 'Cool down by reducing speed gradually'] },
 { id: 'jump_rope', name: 'Jump Rope', group: 'cardio', primary: 'Cardio', secondary: ['Calves', 'Shoulders'], equipment: 'both', diff: 0, priority: 1, sets: 1, rest: 30, video: 'jump rope for beginners', instructions: ['Hold the handles at hip height, elbows close', 'Jump with soft knees using small bounces', 'Rotate the rope with the wrists', 'Keep a steady rhythm and breathe'] },
 { id: 'cycle_ergo', name: 'Stationary Bike', group: 'cardio', primary: 'Cardio (Steady)', secondary: ['Quads'], equipment: 'gym', diff: 0, priority: 1, sets: 1, rest: 30, video: 'stationary bike workout tips', instructions: ['Adjust the seat so the knee is slightly bent at the bottom', 'Set a moderate resistance', 'Pedal at a steady cadence for the full time', 'Stand occasionally to add intensity'] },
 { id: 'burpee', name: 'Burpee', group: 'cardio', primary: 'Full Body', secondary: ['Chest', 'Core', 'Quads'], equipment: 'both', diff: 1, priority: 1, sets: 1, rest: 45, video: 'burpee form tutorial', instructions: ['Drop into a squat and place the hands down', 'Jump the feet back to a plank', 'Do a push-up (optional) and jump the feet in', 'Jump up and clap overhead'] },
 { id: 'brisk_walk', name: 'Brisk Walk Outdoors', group: 'cardio', primary: 'Cardio (Steady)', secondary: [], equipment: 'home', diff: 0, priority: 1, sets: 1, rest: 30, video: 'brisk walking benefits technique', instructions: ['Walk at a steady, faster than usual pace', 'Keep the posture tall and swing the arms', 'Aim for a pace that slightly raises your breath', 'Stay hydrated and wear comfortable shoes'] }
];

var DAY_NAMES = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

var WEEK_CALENDAR = {
 3: [0, 2, 4],
 4: [0, 1, 3, 4],
 5: [0, 1, 3, 4, 5],
 6: [0, 1, 2, 4, 5, 6]
};

var WEEK_TEMPLATES = {
 3: [
 { title: 'Full Body A', groups: [['quads', 1], ['hamstrings', 1], ['chest', 1], ['back', 1], ['shoulders', 1], ['core', 1]] },
 { title: 'Full Body B', groups: [['quads', 1], ['glutes', 1], ['chest', 1], ['back', 1], ['biceps', 1], ['core', 1]] },
 { title: 'Full Body C', groups: [['hamstrings', 1], ['chest', 1], ['back', 1], ['shoulders', 1], ['triceps', 1], ['core', 1]] }
 ],
 4: [
 { title: 'Upper Body A', groups: [['chest', 2], ['back', 1], ['shoulders', 1], ['triceps', 1]] },
 { title: 'Lower Body A', groups: [['quads', 2], ['hamstrings', 1], ['glutes', 1], ['calves', 1]] },
 { title: 'Upper Body B', groups: [['back', 2], ['chest', 1], ['shoulders', 1], ['biceps', 1]] },
 { title: 'Lower Body B', groups: [['quads', 1], ['hamstrings', 1], ['glutes', 1], ['calves', 1], ['core', 1]] }
 ],
 5: [
 { title: 'Push', groups: [['chest', 2], ['shoulders', 2], ['triceps', 1]] },
 { title: 'Pull', groups: [['back', 3], ['biceps', 2]] },
 { title: 'Legs', groups: [['quads', 2], ['hamstrings', 1], ['glutes', 1], ['calves', 1]] },
 { title: 'Upper Body', groups: [['chest', 1], ['back', 1], ['shoulders', 1], ['biceps', 1], ['triceps', 1]] },
 { title: 'Full Body', groups: [['quads', 1], ['chest', 1], ['back', 1], ['shoulders', 1], ['core', 1]] }
 ],
 6: [
 { title: 'Push', groups: [['chest', 2], ['shoulders', 2], ['triceps', 1]] },
 { title: 'Pull', groups: [['back', 3], ['biceps', 2]] },
 { title: 'Legs', groups: [['quads', 2], ['hamstrings', 1], ['glutes', 1], ['calves', 1]] },
 { title: 'Push', groups: [['chest', 2], ['shoulders', 2], ['triceps', 1]] },
 { title: 'Pull', groups: [['back', 3], ['biceps', 2]] },
 { title: 'Legs', groups: [['quads', 2], ['hamstrings', 1], ['core', 1], ['calves', 1]] }
 ]
};

var FOODS = [
 { id: 'eggs', name: 'Eggs', cat: 'protein', cal: 155, p: 13, c: 1, f: 11, tags: ['none', 'vegetarian', 'low_carb'] },
 { id: 'chicken', name: 'Chicken Breast', cat: 'protein', cal: 165, p: 31, c: 0, f: 4, tags: ['none', 'no_dairy', 'low_carb'] },
 { id: 'beef', name: 'Lean Beef', cat: 'protein', cal: 250, p: 26, c: 0, f: 15, tags: ['none', 'no_dairy', 'low_carb'] },
 { id: 'salmon', name: 'Salmon', cat: 'protein', cal: 208, p: 22, c: 0, f: 13, tags: ['none', 'no_dairy', 'low_carb'] },
 { id: 'tuna', name: 'Tuna', cat: 'protein', cal: 132, p: 29, c: 0, f: 1, tags: ['none', 'no_dairy', 'low_carb'] },
 { id: 'shrimp', name: 'Shrimp', cat: 'protein', cal: 99, p: 24, c: 0, f: 1, tags: ['none', 'no_dairy', 'low_carb'] },
  { id: 'turkey', name: 'Turkey Breast', cat: 'protein', cal: 120, p: 26, c: 0, f: 2, tags: ['none', 'no_dairy', 'low_carb'] },
 { id: 'whey', name: 'Whey Protein', cat: 'protein', cal: 120, p: 24, c: 3, f: 1, tags: ['none', 'low_carb', 'vegetarian'] },
 { id: 'tofu', name: 'Tofu', cat: 'protein', cal: 94, p: 10, c: 2, f: 5, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] },
 { id: 'lentils', name: 'Lentils', cat: 'protein', cal: 230, p: 18, c: 40, f: 1, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'chickpeas', name: 'Chickpeas', cat: 'protein', cal: 269, p: 15, c: 45, f: 4, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'milk', name: 'Milk', cat: 'dairy', cal: 103, p: 6, c: 8, f: 2, tags: ['none', 'vegetarian'] },
 { id: 'greek_yogurt', name: 'Greek Yogurt', cat: 'dairy', cal: 100, p: 10, c: 4, f: 5, tags: ['none', 'vegetarian'] },
  { id: 'cottage_cheese', name: 'Cottage Cheese', cat: 'dairy', cal: 92, p: 12, c: 3, f: 4, tags: ['none', 'vegetarian', 'low_carb'] },
 { id: 'cheese', name: 'Cheese', cat: 'dairy', cal: 113, p: 7, c: 1, f: 9, tags: ['none', 'vegetarian'] },
 { id: 'almonds', name: 'Almonds', cat: 'fats', cal: 164, p: 6, c: 6, f: 14, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] },
 { id: 'peanut_butter', name: 'Peanut Butter', cat: 'fats', cal: 190, p: 7, c: 7, f: 16, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] },
 { id: 'olive_oil', name: 'Olive Oil', cat: 'fats', cal: 120, p: 0, c: 0, f: 14, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] },
 { id: 'oats', name: 'Oats', cat: 'carbs', cal: 150, p: 5, c: 27, f: 3, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'brown_rice', name: 'Brown Rice', cat: 'carbs', cal: 216, p: 5, c: 45, f: 2, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'sweet_potato', name: 'Sweet Potato', cat: 'carbs', cal: 112, p: 2, c: 26, f: 0, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'whole_bread', name: 'Whole-Grain Bread', cat: 'carbs', cal: 160, p: 6, c: 26, f: 3, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'pasta', name: 'Whole-Wheat Pasta', cat: 'carbs', cal: 200, p: 7, c: 40, f: 1, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'banana', name: 'Banana', cat: 'carbs', cal: 105, p: 1, c: 27, f: 0, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'apple', name: 'Apple', cat: 'carbs', cal: 95, p: 0, c: 25, f: 0, tags: ['none', 'vegetarian', 'no_dairy'] },
 { id: 'spinach', name: 'Spinach', cat: 'veggies', cal: 23, p: 3, c: 4, f: 0, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] },
 { id: 'broccoli', name: 'Broccoli', cat: 'veggies', cal: 55, p: 4, c: 11, f: 1, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] },
 { id: 'tomatoes', name: 'Tomatoes', cat: 'veggies', cal: 22, p: 1, c: 5, f: 0, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] },
 { id: 'cucumber', name: 'Cucumber', cat: 'veggies', cal: 16, p: 1, c: 4, f: 0, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] },
 { id: 'avocado', name: 'Avocado', cat: 'fats', cal: 160, p: 2, c: 9, f: 15, tags: ['none', 'vegetarian', 'no_dairy', 'low_carb'] }
];

var MEAL_IDEAS = {
 none: {
 breakfast: [
 { title: 'Protein Oats & Banana', items: ['Oats', 'Milk', 'Banana', 'Peanut butter', 'Egg or whey'], kcal: 520, p: 32 },
 { title: 'Veggie Omelette & Toast', items: ['3 eggs', 'Whole-grain toast', 'Spinach & tomato', 'Olive oil'], kcal: 470, p: 30 },
 { title: 'Greek Yogurt & Berries', items: ['Greek yogurt', 'Berries', 'Honey', 'Granola'], kcal: 380, p: 28 }
 ],
 lunch: [
 { title: 'Chicken Rice Bowl', items: ['Grilled chicken', 'Brown rice', 'Salad', 'Olive oil'], kcal: 610, p: 45 },
 { title: 'Beef & Potatoes', items: ['Lean beef', 'Boiled potatoes', 'Steamed veg'], kcal: 640, p: 48 },
 { title: 'Tuna Pasta', items: ['Tuna', 'Whole-wheat pasta', 'Tomato sauce', 'Parmesan'], kcal: 580, p: 40 }
 ],
 dinner: [
 { title: 'Salmon & Sweet Potato', items: ['Grilled salmon', 'Sweet potato', 'Green salad'], kcal: 560, p: 40 },
 { title: 'Chicken & Veggies', items: ['Chicken breast', 'Roasted veggies', 'Quinoa'], kcal: 520, p: 42 },
 { title: 'Shrimp Stir-Fry', items: ['Shrimp', 'Mixed vegetables', 'Rice noodles'], kcal: 470, p: 35 }
 ],
 snack: [
 { title: 'Protein Shake', items: ['Whey protein', 'Milk or water', 'Banana'], kcal: 250, p: 25 },
 { title: 'Nuts & Fruit', items: ['Almonds', 'Apple'], kcal: 240, p: 7 },
 { title: 'Boiled Eggs', items: ['2 boiled eggs', 'Carrot sticks'], kcal: 170, p: 12 }
 ]
 },
 vegetarian: {
 breakfast: [
 { title: 'Oats & Peanut Butter', items: ['Oats', 'Peanut butter', 'Banana', 'Milk or soy milk'], kcal: 500, p: 24 },
 { title: 'Veggie Omelette & Toast', items: ['3 eggs', 'Whole-grain toast', 'Spinach & tomato'], kcal: 460, p: 26 },
 { title: 'Greek Yogurt & Granola', items: ['Greek yogurt', 'Granola', 'Berries'], kcal: 390, p: 24 }
 ],
 lunch: [
 { title: 'Tofu Rice Bowl', items: ['Tofu', 'Brown rice', 'Salad', 'Olive oil'], kcal: 580, p: 35 },
 { title: 'Lentil Soup & Bread', items: ['Lentils', 'Whole-grain bread', 'Salad'], kcal: 540, p: 30 },
 { title: 'Chickpea Pasta', items: ['Chickpeas', 'Whole-wheat pasta', 'Tomato sauce'], kcal: 570, p: 32 }
 ],
 dinner: [
 { title: 'Halloumi & Veggies', items: ['Halloumi or feta', 'Roasted veggies', 'Quinoa'], kcal: 520, p: 28 },
 { title: 'Paneer Stir-Fry', items: ['Paneer or tofu', 'Mixed vegetables', 'Rice'], kcal: 540, p: 30 },
 { title: 'Veggie Burger & Salad', items: ['Chickpea burger', 'Whole bun', 'Salad'], kcal: 490, p: 26 }
 ],
 snack: [
 { title: 'Tofu Snack', items: ['Baked tofu cubes', 'Cucumber'], kcal: 180, p: 16 },
 { title: 'Nuts & Fruit', items: ['Almonds', 'Apple'], kcal: 240, p: 7 },
 { title: 'Boiled Eggs', items: ['2 boiled eggs'], kcal: 155, p: 13 }
 ]
 },
 no_dairy: {
 breakfast: [
 { title: 'Eggs & Oats', items: ['3 eggs', 'Oats with water/soy milk', 'Banana'], kcal: 480, p: 30 },
 { title: 'Veggie Omelette & Toast', items: ['3 eggs', 'Whole-grain toast', 'Avocado'], kcal: 500, p: 26 },
 { title: 'Protein Oats', items: ['Oats with water', 'Whey protein', 'Almonds'], kcal: 470, p: 34 }
 ],
 lunch: [
 { title: 'Chicken Rice Bowl', items: ['Grilled chicken', 'Brown rice', 'Salad', 'Olive oil'], kcal: 610, p: 45 },
 { title: 'Beef & Potatoes', items: ['Lean beef', 'Boiled potatoes', 'Steamed veg'], kcal: 640, p: 48 },
 { title: 'Tuna & Quinoa', items: ['Tuna', 'Quinoa', 'Cucumber salad'], kcal: 520, p: 42 }
 ],
 dinner: [
 { title: 'Salmon & Sweet Potato', items: ['Grilled salmon', 'Sweet potato', 'Green salad'], kcal: 560, p: 40 },
 { title: 'Chicken & Veggies', items: ['Chicken breast', 'Roasted veggies', 'Quinoa'], kcal: 520, p: 42 },
 { title: 'Shrimp Stir-Fry', items: ['Shrimp', 'Mixed vegetables', 'Rice noodles'], kcal: 470, p: 35 }
 ],
 snack: [
 { title: 'Protein Shake', items: ['Whey protein', 'Water', 'Banana'], kcal: 220, p: 25 },
 { title: 'Nuts & Fruit', items: ['Almonds', 'Apple'], kcal: 240, p: 7 },
 { title: 'Boiled Eggs', items: ['2 boiled eggs', 'Carrot sticks'], kcal: 170, p: 12 }
 ]
 },
 low_carb: {
 breakfast: [
 { title: 'Egg & Avocado Plate', items: ['3 eggs', 'Avocado', 'Tomatoes'], kcal: 420, p: 26 },
 { title: 'Veggie Omelette', items: ['3 eggs', 'Spinach', 'Cheese'], kcal: 400, p: 28 },
 { title: 'Greek Yogurt & Nuts', items: ['Greek yogurt', 'Almonds', 'Peanut butter'], kcal: 390, p: 28 }
 ],
 lunch: [
 { title: 'Chicken & Salad', items: ['Grilled chicken', 'Big salad', 'Olive oil', 'Avocado'], kcal: 520, p: 45 },
 { title: 'Beef & Leafy Greens', items: ['Lean beef', 'Sautéed greens', 'Cucumber'], kcal: 540, p: 44 },
 { title: 'Salmon & Veggies', items: ['Salmon', 'Roasted broccoli', 'Olive oil'], kcal: 480, p: 38 }
 ],
 dinner: [
 { title: 'Chicken Stir-Fry', items: ['Chicken', 'Mixed greens', 'Olive oil'], kcal: 460, p: 42 },
 { title: 'Shrimp & Salad', items: ['Shrimp', 'Green salad', 'Avocado'], kcal: 420, p: 36 },
 { title: 'Beef & Broccoli', items: ['Lean beef', 'Broccoli', 'Garlic'], kcal: 500, p: 40 }
 ],
 snack: [
 { title: 'Boiled Eggs', items: ['2 boiled eggs'], kcal: 155, p: 13 },
 { title: 'Nuts', items: ['Almonds', 'Cheese cubes'], kcal: 280, p: 13 },
 { title: 'Tuna Cup', items: ['Tuna', 'Cucumber slices'], kcal: 150, p: 30 }
 ]
 }
};

var FOODS_BY_MEAL = {
breakfast: ['eggs', 'oats', 'milk', 'greek_yogurt', 'cottage_cheese', 'banana', 'almonds', 'peanut_butter', 'whey', 'whole_bread', 'tofu', 'tomatoes', 'cucumber'],
  lunch: ['chicken', 'beef', 'tuna', 'turkey', 'brown_rice', 'sweet_potato', 'pasta', 'lentils', 'chickpeas', 'tofu', 'broccoli', 'olive_oil', 'avocado'],
  dinner: ['salmon', 'chicken', 'shrimp', 'beef', 'turkey', 'tofu', 'lentils', 'broccoli', 'spinach', 'sweet_potato', 'olive_oil'],
  snack: ['whey', 'apple', 'banana', 'almonds', 'cheese', 'peanut_butter', 'eggs', 'greek_yogurt', 'cottage_cheese', 'tuna']
};

var MEAL_CAL_SPLIT = {
  breakfast: 0.27,
  lunch: 0.33,
  dinner: 0.25,
  snack: 0.15
};

function gymMealRecommend(profile, time) {
  var nutrition = computeNutrition(profile);
  var target = Math.max(120, Math.round(nutrition.target * (MEAL_CAL_SPLIT[time] || 0.25)));
  var diet = profile.diet || 'none';
  function dietOK(f) { return f.tags.indexOf(diet) !== -1; }
  var pool = (FOODS_BY_MEAL[time] || []).map(gymFoodById).filter(Boolean).filter(dietOK);
  if (!pool.length) pool = FOODS.filter(dietOK);

  var used = {};
  function take(f) {
  if (!f || used[f.id]) return null;
  used[f.id] = true;
  return f;
  }
  function cats() { return ['protein', 'dairy', 'carbs', 'veggies', 'fats']; }
  function avail(cat) {
  return pool.filter(function (f) { return !used[f.id] && f.cat === cat; });
  }

  var chosen = [];
  function addBest(cat, sortFn) {
  var list = avail(cat).sort(sortFn);
  for (var i = 0; i < list.length; i++) {
  var f = take(list[i]);
  if (f) { chosen.push(f); return f; }
  }
  return null;
  }
  function calOf() {
  var t = 0;
  chosen.forEach(function (f) { t += f.cal; });
  return t;
  }

  var protSort = function (a, b) { var r = b.p / b.cal - a.p / a.cal; return r !== 0 ? r : a.cal - b.cal; };
  var carbSort = function (a, b) { var da = Math.abs(a.cal - target * 0.35), db = Math.abs(b.cal - target * 0.35); return da - db; };
  var vegSort = function (a, b) { return b.p - a.p; };
  var fatSort = function (a, b) { return a.cal - b.cal; };

  addBest('protein', protSort);          // 1) lean protein anchor
  if (!chosen.length) addBest('dairy', protSort);
  if (time !== 'snack') addBest('veggies', vegSort); // 2) micronutrient veg
  if (calOf() < target * 0.4) addBest('carbs', carbSort); // 3) energy carb
  if (calOf() < target * 0.5) addBest('dairy', protSort);
  if (calOf() < target * 0.6) addBest('carbs', carbSort);
  if (calOf() < target * 0.7) addBest('fats', fatSort);

  if (calOf() < target * 0.85 || calOf() > target * 1.15) {
  var guard = 0, lastD = 1e9;
  while (guard < 15) {
  guard++;
  var total = calOf();
  var best = null, bestD = 1e9;
  for (var c2 = 0; c2 < cats().length; c2++) {
  var list = avail(cats()[c2]);
  for (var k2 = 0; k2 < list.length; k2++) {
  var f2 = list[k2];
  var nt = total + f2.cal;
  if (nt < target * 0.3 || nt > target * 1.6) continue;
  var d = Math.abs(nt - target);
  if (d < bestD) { bestD = d; best = f2; }
  }
  }
  if (!best) break;
  if (bestD > lastD) break; // we are drifting away from the target
  if (chosen.length >= 8) break;
  take(best);
  chosen.push(best);
  lastD = bestD;
  }
  }

  var kcal = 0, prot = 0;
  chosen.forEach(function (f) { kcal += f.cal; prot += f.p; });
  var items = chosen.map(function (f) { return f.name; });
  var foods = chosen.map(function (f) { return f.id; });
  var head = items.slice(0, 2).join(' & ');
  var kind = { breakfast: 'Breakfast', lunch: 'Bowl', dinner: 'Dinner', snack: 'Snack' }[time] || 'Plate';
  return {
  title: head + ' ' + kind,
  items: items,
  foods: foods,
  kcal: Math.round(kcal),
  p: Math.round(prot),
  target: target
  };
}

function gymMaxDiff(levelId) {
 var m = { beginner: 0, intermediate: 1, advanced: 2 };
 return m[levelId] || 0;
}

function gymEquipmentOK(equipment, place) {
 if (equipment === 'both') return true;
 return equipment === place;
}

function gymVideoUrl(query) {
 return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
}

var GROUP_FALLBACK = {
    hamstrings: ['glutes', 'quads'],
    calves: ['hamstrings', 'glutes'],
    triceps: ['chest', 'shoulders'],
    biceps: ['back'],
    shoulders: ['chest', 'triceps']
   };

function buildWeeklyPlan(profile) {
 var place = profile.place;
 var maxDiff = gymMaxDiff(profile.level);
 var days = profile.days;
 var template = WEEK_TEMPLATES[days];
 var calendar = WEEK_CALENDAR[days];
 var goalProf = GYM_GOAL_PROFILE[profile.goal];
 var state = {};
 var week = [];

 function poolFor(group) {
 return EXERCISES.filter(function (ex) {
 return ex.group === group && gymEquipmentOK(ex.equipment, place) && ex.diff <= maxDiff;
 }).sort(function (a, b) {
 if (a.priority !== b.priority) return a.priority - b.priority;
 return a.id < b.id ? -1 : 1;
 });
 }

 function pick(group, count, dayUsed) {
 var pool = poolFor(group);
 var tried = {};
 tried[group] = true;
 var alt = GROUP_FALLBACK[group] || [];
 for (var a = 0; a < alt.length && !pool.length; a++) {
 if (tried[alt[a]]) continue;
 pool = poolFor(alt[a]);
 tried[alt[a]] = true;
 }
 if (!pool.length) return [];
 var start = state[group] || 0;
 var out = [];
 for (var i = 0; i < pool.length && out.length < count; i++) {
 var ex = pool[(start + i) % pool.length];
 if (dayUsed[ex.id]) continue;
 out.push(ex);
 dayUsed[ex.id] = true;
 }
 state[group] = (start + out.length) % pool.length;
 return out;
 }

 for (var d = 0; d < 7; d++) {
 var idx = calendar.indexOf(d);
 if (idx === -1) {
 var restFinisher = (goalProf.finisher && (profile.goal === 'lose_fat' || profile.goal === 'fitness')) ? goalProf.finisher : null;
 if (profile.goal === 'lose_fat' && (d === 1 || d === 3)) restFinisher = GYM_GOAL_PROFILE.lose_fat.finisher;
 week.push({ index: d, dayName: DAY_NAMES[d], type: 'rest', title: 'Recovery Day', exercises: [], finisher: restFinisher });
 continue;
 }
var dayTemplate = template[idx];
var exercises = [];
  var dayUsed = {};
  for (var g = 0; g < dayTemplate.groups.length; g++) {
  var grp = dayTemplate.groups[g][0];
  var cnt = dayTemplate.groups[g][1];
  var picked = pick(grp, cnt, dayUsed);
  for (var p = 0; p < picked.length; p++) {
  var ex = picked[p];
  var sets = (ex.sets || 3) + (goalProf.extraSets || 0);
  var repText = goalProf.repRange;
  var restLabel = goalProf.restLabel;
  var restSec = goalProf.restSec;
  if (ex.id === 'deadlift' || ex.id === 'back_squat') {
  if (profile.goal === 'strength') { sets = 5; repText = '3–5'; restLabel = '180 sec'; restSec = 180; }
  }
  exercises.push({
  ex: ex,
  sets: sets,
  reps: repText,
  rest: restLabel,
  restSec: restSec,
  equipmentLabel: ex.equipment === 'gym' ? 'Gym' : (ex.equipment === 'home' ? 'Home' : 'Gym + Home')
  });
  }
  }
  var compounds = exercises.filter(function (e) { return e.ex.priority === 0; });
  var isolations = exercises.filter(function (e) { return e.ex.priority !== 0; });
  exercises = compounds.concat(isolations);
 var finisher = goalProf.finisher || null;
 week.push({ index: d, dayName: DAY_NAMES[d], type: 'train', title: dayTemplate.title, exercises: exercises, finisher: finisher });
 }

 return { week: week, goalProf: goalProf, meta: { place: place, days: days, level: profile.level } };
}

function computeNutrition(profile) {
 var male = profile.gender === 'male';
 var mult = male ? 5 : -161;
 var bmr = Math.round(10 * profile.weight + 6.25 * profile.height - 5 * profile.age + mult);
 var factor = 1.375;
 for (var i = 0; i < GYM_ACTIVITY.length; i++) {
 if (GYM_ACTIVITY[i].id === profile.activity) { factor = GYM_ACTIVITY[i].factor; break; }
 }
 var tdee = Math.round(bmr * factor);
 var adjust = { muscle_gain: 100, lose_fat: -500, gain_weight: 400, strength: 200, fitness: 0 }[profile.goal] || 0;
 var target = Math.round((tdee + adjust) / 10) * 10;
 var minCals = male ? 1500 : 1200;
 if (target < minCals) target = minCals;
 var proteinPerKg = { muscle_gain: 1.8, lose_fat: 2.2, gain_weight: 1.7, strength: 1.8, fitness: 1.6 }[profile.goal] || 1.8;
 var protein = Math.max(Math.round(profile.weight * proteinPerKg), 60);
 var fat = Math.round((target * 0.25) / 9);
 var carbCal = target - protein * 4 - fat * 9;
 var carbs = carbCal > 0 ? Math.round(carbCal / 4) : 0;
 var water = Math.round(profile.weight * 35);
 return { bmr: bmr, tdee: tdee, target: target, protein: protein, fat: fat, carbs: carbs, water: water };
}

function gymSaveProfile(profile) {
 try { localStorage.setItem('changoGymProfile', JSON.stringify(profile)); } catch (e) {}
}

function gymLoadProfile() {
 try { return JSON.parse(localStorage.getItem('changoGymProfile')) || null; } catch (e) { return null; }
}

function gymLeadSave(profile) {
 var lead = {
 name: profile.name || '',
 phone: profile.phone || '',
 goal: profile.goal,
 level: profile.level,
 days: profile.days,
 place: profile.place,
 created: new Date().toISOString()
 };
 try { localStorage.setItem('changoGymLead', JSON.stringify(lead)); } catch (e) {}
 return lead;
}

function gymLeadLink(profile) {
 var goal = GYM_GOALS.filter(function (g) { return g.id === profile.goal; })[0];
 var lvl = GYM_LEVELS.filter(function (l) { return l.id === profile.level; })[0];
 var place = GYM_PLACES.filter(function (p) { return p.id === profile.place; })[0];
 var msg = 'Hi Chango Gym!';
 msg += '\nI just built my free fitness plan!' + (profile.name ? '\nName: ' + profile.name : '');
 msg += (profile.phone ? '\nPhone: ' + profile.phone : '');
 msg += '\nGoal: ' + (goal ? goal.short : profile.goal) + (lvl ? ' | Level: ' + lvl.label : '');
 msg += '\nTraining: ' + profile.days + ' days | Place: ' + (place ? place.label : profile.place);
 msg += '\nI want to book my free trial session and unlock the full 4-week plan. ';
 return 'https://chat.whatsapp.com/ImsdjravuSIAfRxk9TRonB';
}

function gymInitProgress(profile) {
 var w = profile.weight;
 var male = profile.gender === 'male';
 var w1 = {
 week: 1, weight: w, chest: Math.round(w * (male ? 0.53 : 0.5)), waist: Math.round(w * (male ? 0.45 : 0.4)),
 arm: Math.round(w * 0.16), thigh: Math.round(w * 0.28), energy: 3, consistency: 68, performance: 6.5
 };
 var goal = profile.goal;
 var dWeight = { lose_fat: -0.7, gain_weight: 0.8, muscle_gain: 0.5, strength: 0.3, fitness: -0.3 }[goal] || 0;
 var dWaist = (goal === 'lose_fat') ? -1.2 : ((goal === 'fitness') ? -0.6 : 0);
 var dArm = (goal === 'muscle_gain' || goal === 'gain_weight') ? 0.4 : 0.2;
 var w2 = {
 week: 2, weight: Math.round((w + dWeight) * 10) / 10, chest: w1.chest + (goal === 'gain_weight' ? 1 : 0),
 waist: Math.round((w1.waist + dWaist) * 10) / 10, arm: Math.round((w1.arm + dArm) * 10) / 10,
 thigh: Math.round((w1.thigh + (goal === 'lose_fat' ? -1 : 1)) * 10) / 10,
 energy: 4, consistency: 91, performance: 8.2
 };
 var data = { logs: [w1, w2], started: new Date().toISOString() };
 try { localStorage.setItem('changoGymProgress', JSON.stringify(data)); } catch (e) {}
 return data;
}

function gymLoadProgress(profile) {
 try {
 var data = JSON.parse(localStorage.getItem('changoGymProgress'));
 if (data && data.logs && data.logs.length) return data;
 } catch (e) {}
 return gymInitProgress(profile);
}

function gymSaveProgress(data) {
 try { localStorage.setItem('changoGymProgress', JSON.stringify(data)); } catch (e) {}
}

function gymDelta(logs) {
 if (!logs || logs.length < 2) return {};
 var a = logs[0], b = logs[logs.length - 1];
 var d = function (key, dir) {
 var diff = Math.round((b[key] - a[key]) * 10) / 10;
 if (dir === 'down') diff = -diff;
 return diff;
 };
 return {
 weight: d('weight', 'down'),
 waist: d('waist', 'down'),
 arm: d('arm', 'up'),
 chest: d('chest', 'up'),
 thigh: d('thigh', 'up'),
 consistency: b.consistency - a.consistency,
 energy: b.energy - a.energy,
 performance: Math.round((b.performance - a.performance) * 10) / 10
 };
}

function gymStrengthSample(profile) {
 var base = { bench: 40, squat: 60, deadlift: 80 };
 var mult = { beginner: 1, intermediate: 2, advanced: 3 }[profile.level] || 1;
 var inc = { muscle_gain: 8, lose_fat: 6, gain_weight: 6, strength: 12, fitness: 4 }[profile.goal] || 6;
 return {
 bench: base.bench * mult, benchTo: base.bench * mult + inc,
 squat: base.squat * mult, squatTo: base.squat * mult + inc * 1.2,
 deadlift: base.deadlift * mult, deadliftTo: base.deadlift * mult + inc * 1.5
 };
}

function coachReply(text) {
 var lower = (text || '').toLowerCase();
 var contains = function (arr) {
 for (var i = 0; i < arr.length; i++) { if (lower.indexOf(arr[i]) !== -1) return true; }
 return false;
 };

 if (contains(['pain', 'hurt', 'injury', 'injured', 'ache', 'torn', 'broken', 'ألم', 'إصابة'])) {
 return {
 safe: true, reply: 'My first advice: stop the exercise and do not push through pain. If it is sharp, persistent, or happened after an injury, please consult a doctor or physiotherapist before training again — I am not a medical professional. Once cleared, we can modify that movement or swap it for a pain-free alternative.'
 };
 }

 if (contains(['dietitian', 'diet plan', 'prescription', 'مرض', 'سكر', 'ضغط', 'kidney', 'diabetes', 'medical'])) {
 return {
 safe: true, reply: 'I can help with general nutrition guidance only, and I am not a registered dietitian. For any medical condition, allergy, eating disorder, or medication, please get a plan from a qualified specialist. What I can do: share balanced meal ideas around your goal and help you hit your daily protein and calorie targets.'
 };
 }

 if (contains(['can\'t', 'cant', 'cannot', 'too heavy', 'too hard', 'fail', 'failed', 'lifting', 'مش قادر', 'تقيل'])) {
 return {
 safe: true, reply: 'That is totally normal — the weight does not need to be maximal every workout. Reduce the load by 10–20% and keep the reps clean, or try an easier version of the same movement (for example, push-ups on an incline). Progress beats perfection: show up, and add weight slowly next week.'
 };
 }

 if (contains(['form', 'technique', 'posture', 'ترتيب', 'طريقة'])) {
 return {
 safe: true, reply: 'Great question. Before adding more weight, lock in form: brace your core, keep a neutral spine, and control the lowering phase. Open the video link on any exercise above and watch 1–2 demonstrations, then practice with a light load. If you still feel unsure, record yourself from the side and compare.'
 };
 }

 if (contains(['tired', 'sleep', 'rest', 'fatigue', 'نوم', 'تعب'])) {
 return {
 safe: true, reply: 'Recovery is where the progress happens. Aim for 7–9 hours of sleep, take your rest days seriously, and keep protein and water steady. If fatigue lasts more than a week and you feel constantly drained, mention that to your coach — or a doctor if it is persistent.'
 };
 }

 if (contains(['nutrition', 'eat', 'food', 'meal', 'protein', 'كل', 'أكل', 'وجبة'])) {
 return {
 safe: true, reply: 'Look at the Nutrition section above — I set your daily calorie, protein, carb, and fat targets plus simple meal ideas for your preferences. A simple rule: one palm of protein, one fist of carbs, and two handfuls of vegetables per main meal. Remember, this is general guidance, not a prescription.'
 };
 }

 if (contains(['motivation', 'bored', 'lazy', 'give up', 'استسلام', 'ملل'])) {
 return {
 safe: true, reply: 'Discipline beats motivation on hard days. Set one tiny goal for today (even 15 minutes), track it in the progress dashboard, and remember why you started. Consistency of 2–3 sessions beats sporadic hard training. You have the plan — just arrive and do half if that is all you have.'
 };
 }

 return {
 safe: false, reply: 'Nice question! I can help with your weekly plan, individual exercises, recovery, or nutrition. Tell me what is on your mind — for example, "how should I warm up?", "my bench felt off today", or "that exercise targets which muscle?" If you are ever in pain or have a health condition, I will always point you to a professional before anything else.'
 };
}

function gymGoalShort(id) {
 for (var i = 0; i < GYM_GOALS.length; i++) { if (GYM_GOALS[i].id === id) return GYM_GOALS[i].short; }
 return id;
}

function gymLevelLabel(id) {
 for (var i = 0; i < GYM_LEVELS.length; i++) { if (GYM_LEVELS[i].id === id) return GYM_LEVELS[i].label; }
 return id;
}

function gymPlaceLabel(id) {
 for (var i = 0; i < GYM_PLACES.length; i++) { if (GYM_PLACES[i].id === id) return GYM_PLACES[i].label; }
 return id;
}

function gymDietLabel(id) {
 for (var i = 0; i < GYM_DIETS.length; i++) { if (GYM_DIETS[i].id === id) return GYM_DIETS[i].label; }
 return id;
}

function gymFoodById(id) {
 for (var i = 0; i < FOODS.length; i++) { if (FOODS[i].id === id) return FOODS[i]; }
 return null;
}
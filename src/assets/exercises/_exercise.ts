export const muscleGroupsList = [
  'Abs',
  'Back',
  'Biceps',
  'Butt',
  'Calves',
  'Chest',
  'Forearms',
  'Neck',
  'Shoulders',
  'Thighs',
  'Triceps',
];

export const exercisesList = [
  {
    id: 'deadlift',
    name: 'Deadlift',
    group: ['Butt', 'Thighs', 'Back'],
    focusPoints:
      'Maintain a neutral spine, engage core, keep the bar close to body. Ensure your hips and shoulders rise at the same rate to avoid excessive strain on your lower back.',
    startPosition:
      'Stand with feet hip-width apart, grip barbell with hands just outside knees. Ensure the bar is over the mid-foot, shoulders slightly in front of the bar, and your back is straight.',
    process:
      'Drive through heels, extending your legs while keeping the bar close to your body. Pull the bar up along your legs, keeping your arms straight. As the bar passes your knees, thrust your hips forward to stand up straight. Reverse the motion to lower the bar, ensuring to push your hips back before bending your knees.',
    muscleMain: ['Hamstrings', 'Glutes', 'Lower Back'],
    muscleAdditional: ['Upper Back', 'Core', 'Forearms'],
    image: 'deadlift',
  },
  {
    id: 'ab-wheel-rollout',
    name: 'Ab Wheel Rollout',
    group: ['Abs'],
    focusPoints: 'Engage your core and avoid letting your back arch. Keep your arms straight as you roll out and in.',
    startPosition:
      'Kneel on the ground, gripping the ab wheel with both hands, and place it on the floor in front of you.',
    process:
      'Roll the wheel forward, extending your body, and then roll back to the starting position, maintaining core engagement throughout.',
    muscleMain: ['Abdominals'],
    muscleAdditional: ['Obliques', 'Shoulders'],
    image: 'ab-wheel-rollout',
  },
  {
    id: 'hyperextension-side-bends',
    name: 'Hyperextension Side Bends',
    group: ['Abs', 'Back'],
    focusPoints: 'Keep your back straight and avoid twisting your torso.',
    startPosition:
      'Lie face down on a hyperextension bench, with your hips on the pad and feet secured under the foot pads.',
    process:
      'Lower your torso to the side, then raise it back up to the starting position, focusing on engaging the obliques.',
    muscleMain: ['Obliques'],
    muscleAdditional: ['Lower Back'],
    image: 'hyperextension-side-bends',
  },
  {
    id: 'abdominal-crunch',
    name: 'Abdominal Crunch',
    group: ['Abs'],
    focusPoints: 'Engage your core, and avoid pulling on your neck.',
    startPosition: 'Lie on your back with knees bent and feet flat on the floor. Place your hands behind your head.',
    process: 'Lift your shoulders off the ground using your abs, then lower back down with control.',
    muscleMain: ['Rectus Abdominis'],
    muscleAdditional: ['Obliques'],
    image: 'abdominal-crunch',
  },
  {
    id: 'knee-raise',
    name: 'Knee Raise',
    group: ['Abs'],
    focusPoints: 'Engage your core and avoid swinging your body.',
    startPosition: 'Hang from a pull-up bar with your arms fully extended and your legs straight.',
    process: 'Lift your knees towards your chest, then lower them back down with control.',
    muscleMain: ['Lower Abdominals'],
    muscleAdditional: ['Hip Flexors'],
    image: 'knee-raise',
  },
  {
    id: 'abdominal-twist',
    name: 'Abdominal Twist',
    group: ['Abs'],
    focusPoints: 'Keep your back straight and avoid rotating too quickly.',
    startPosition:
      'Sit on the ground with your knees bent and feet slightly lifted off the floor. Hold a weight or your hands together in front of you.',
    process: 'Twist your torso from side to side, touching the weight or hands to the ground beside you.',
    muscleMain: ['Obliques'],
    muscleAdditional: ['Rectus Abdominis'],
    image: 'abdominal-twist',
  },
  {
    id: 'oblique-leg-raises',
    name: 'Oblique Leg Raises',
    group: ['Abs'],
    focusPoints: 'Maintain control and avoid swinging your legs.',
    startPosition: 'Hang from a pull-up bar, with your legs straight and feet together.',
    process: 'Raise your legs to one side, then lower them back down and repeat on the other side.',
    muscleMain: ['Obliques'],
    muscleAdditional: ['Hip Flexors'],
    image: 'oblique-leg-raises',
  },
  {
    id: 'reverse-crunches',
    name: 'Reverse Crunches',
    group: ['Abs'],
    focusPoints: 'Keep your lower back pressed into the ground and avoid using momentum.',
    startPosition: 'Lie on your back with your hands by your sides and legs lifted with knees bent at 90 degrees.',
    process:
      'Lift your hips off the ground, bringing your knees towards your chest, then lower back down with control.',
    muscleMain: ['Lower Abdominals'],
    muscleAdditional: ['Hip Flexors'],
    image: 'reverse-crunches',
  },
  {
    id: 'scissor-kicks',
    name: 'Scissor Kicks',
    group: ['Abs'],
    focusPoints: 'Keep your core engaged and lower back pressed into the ground.',
    startPosition: 'Lie on your back with your hands under your hips and legs extended.',
    process:
      'Lift your legs slightly off the ground and alternate crossing them over and under each other in a scissor-like motion.',
    muscleMain: ['Lower Abdominals'],
    muscleAdditional: ['Hip Flexors'],
    image: 'scissor-kicks',
  },
  {
    id: 'bicycle-crunches',
    name: 'Bicycle Crunches',
    group: ['Abs'],
    focusPoints: 'Engage your core and avoid pulling on your neck.',
    startPosition: 'Lie on your back with your hands behind your head and legs lifted with knees bent.',
    process:
      'Simultaneously extend one leg and twist your torso to bring the opposite elbow towards the raised knee, then switch sides.',
    muscleMain: ['Rectus Abdominis', 'Obliques'],
    muscleAdditional: ['Hip Flexors'],
    image: 'bicycle-crunches',
  },
  {
    id: 'cable-crunch',
    name: 'Cable Crunch',
    group: ['Abs'],
    focusPoints: 'Engage your core and avoid using your arms to pull the weight.',
    startPosition:
      'Kneel in front of a cable machine with a rope attachment, holding the ends of the rope by your ears.',
    process: 'Crunch your upper body towards your knees, contracting your abs, then return to the starting position.',
    muscleMain: ['Rectus Abdominis'],
    muscleAdditional: ['Obliques'],
    image: 'cable-crunch',
  },
  {
    id: 'side-bends',
    name: 'Side Bends',
    group: ['Abs'],
    focusPoints: 'Keep your back straight and avoid twisting your torso.',
    startPosition: 'Stand with feet shoulder-width apart, holding a weight in one hand.',
    process: 'Bend sideways at the waist towards the weight, then return to the starting position.',
    muscleMain: ['Obliques'],
    muscleAdditional: ['Lower Back'],
    image: 'side-bends',
  },
  {
    id: 'cable-lying-knee-tucks',
    name: 'Cable Lying Knee Tucks',
    group: ['Abs'],
    focusPoints: 'Engage your core and avoid arching your back.',
    startPosition: 'Lie on your back with your feet secured in a cable machine and knees bent.',
    process: 'Pull your knees towards your chest, then extend your legs back out.',
    muscleMain: ['Lower Abdominals'],
    muscleAdditional: ['Hip Flexors'],
    image: 'cable-lying-knee-tucks',
  },
  {
    id: 'sit-ups',
    name: 'Sit-Ups',
    group: ['Abs'],
    focusPoints: 'Engage your core and avoid pulling on your neck.',
    startPosition:
      'Lie on your back with your knees bent and feet flat on the floor. Place your hands behind your head or across your chest.',
    process: 'Lift your upper body towards your knees, then lower back down with control.',
    muscleMain: ['Rectus Abdominis'],
    muscleAdditional: ['Hip Flexors'],
    image: 'sit-ups',
  },
  {
    id: 'crunches',
    name: 'Crunches',
    group: ['Abs'],
    focusPoints: 'Engage your core and avoid pulling on your neck.',
    startPosition:
      'Lie on your back with your knees bent and feet flat on the floor. Place your hands behind your head.',
    process: 'Lift your shoulders off the ground using your abs, then lower back down with control.',
    muscleMain: ['Rectus Abdominis'],
    muscleAdditional: ['Obliques'],
    image: 'crunches',
  },
  {
    id: 'standing-abdominal-twist',
    name: 'Standing Abdominal Twist',
    group: ['Abs'],
    focusPoints: 'Keep your core engaged and maintain a straight back.',
    startPosition: 'Stand with feet shoulder-width apart, holding a weight or medicine ball at chest level.',
    process: 'Twist your torso to one side, then return to the center and twist to the opposite side.',
    muscleMain: ['Obliques'],
    muscleAdditional: ['Rectus Abdominis'],
    image: 'standing-abdominal-twist',
  },
  {
    id: 'hanging-knee-raise',
    name: 'Hanging Knee Raise',
    group: ['Abs'],
    focusPoints: 'Engage your core and avoid swinging your body.',
    startPosition: 'Hang from a pull-up bar with arms fully extended and legs straight.',
    process: 'Raise your knees towards your chest, then lower them back down with control.',
    muscleMain: ['Lower Abdominals'],
    muscleAdditional: ['Hip Flexors'],
    image: 'hanging-knee-raise',
  },
  {
    id: 'windshield-wipers',
    name: 'Windshield Wipers',
    group: ['Abs'],
    focusPoints: 'Keep your core engaged and avoid using momentum.',
    startPosition: 'Lie on your back with arms outstretched and legs lifted at a 90-degree angle.',
    process:
      'Lower your legs to one side without letting them touch the ground, then raise them back up and lower to the other side.',
    muscleMain: ['Obliques'],
    muscleAdditional: ['Lower Abdominals'],
    image: 'windshield-wipers',
  },
  {
    id: 'hanging-leg-curl',
    name: 'Hanging Leg Curl',
    group: ['Abs', 'Thighs'],
    focusPoints: 'Engage your core and avoid swinging.',
    startPosition: 'Hang from a pull-up bar with arms extended and legs straight.',
    process: 'Bend your knees to bring your heels towards your glutes, then lower back down with control.',
    muscleMain: ['Lower Abdominals'],
    muscleAdditional: ['Hamstrings'],
    image: 'hanging-leg-curl',
  },
  {
    id: 'barbell-lunges',
    name: 'Barbell Lunges',
    group: ['Butt', 'Thighs'],
    focusPoints:
      'Maintain an upright torso and ensure your front knee doesn’t go past your toes. Engage your core for stability.',
    startPosition:
      'Stand with feet hip-width apart, holding a barbell across your upper back with hands just outside shoulder width.',
    process:
      'Step forward with one leg, lowering your hips until both knees are bent at about 90 degrees. Return to the starting position by pushing off the front foot. Repeat on the other side.',
    muscleMain: ['Glutes', 'Quadriceps'],
    muscleAdditional: ['Hamstrings', 'Calves', 'Core'],
    image: 'barbell-lunges',
  },
  {
    id: 'lunges',
    name: 'Lunges',
    group: ['Butt', 'Thighs'],
    focusPoints:
      'Maintain a straight back and ensure your front knee aligns with your ankle. Avoid letting your knee extend past your toes.',
    startPosition: 'Stand upright with feet together and hands on your hips or holding weights at your sides.',
    process:
      'Step forward with one leg, bending both knees to lower your hips until your back knee nearly touches the ground. Push through the front heel to return to the starting position. Alternate legs.',
    muscleMain: ['Glutes', 'Quadriceps'],
    muscleAdditional: ['Hamstrings', 'Calves'],
    image: 'lunges',
  },
  {
    id: 'barbell-step-ups',
    name: 'Barbell Step-Ups',
    group: ['Butt', 'Thighs'],
    focusPoints:
      'Keep your chest up and engage your core. Use your lead leg to push up onto the platform, avoiding pushing off with the trailing leg.',
    startPosition: 'Stand facing a platform or bench, holding a barbell across your upper back.',
    process:
      'Step up onto the platform with one leg, pushing through your heel to lift your body up. Step back down with control and repeat with the opposite leg.',
    muscleMain: ['Glutes', 'Quadriceps'],
    muscleAdditional: ['Hamstrings', 'Calves'],
    image: 'barbell-step-ups',
  },
  {
    id: 'squats',
    name: 'Squats',
    group: ['Butt', 'Thighs'],
    focusPoints: 'Keep your chest lifted and back neutral. Ensure your knees track in line with your toes.',
    startPosition: 'Stand with feet shoulder-width apart, arms extended in front of you or hands on your hips.',
    process:
      'Lower your body by bending your knees and hips, keeping your back straight and head up. Lower until your thighs are parallel to the ground or as low as you can comfortably go. Return to the starting position by driving through your heels.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Core'],
    image: 'squats',
  },
  {
    id: 'band-wrist-extension',
    name: 'Band Wrist Extension',
    group: ['Forearms'],
    focusPoints: 'Keep your elbow stationary and move only your wrist. Avoid using momentum.',
    startPosition:
      'Sit on a bench with your forearm resting on your thigh and a resistance band looped under your foot, holding the band with your palm facing down.',
    process:
      'Extend your wrist upwards against the resistance of the band, then slowly lower back to the starting position.',
    muscleMain: ['Extensor Forearm Muscles'],
    muscleAdditional: [],
    image: 'band-wrist-extension',
  },
  {
    id: 'finger-curls',
    name: 'Finger Curls',
    group: ['Forearms'],
    focusPoints: 'Focus on controlled movements and avoid using the whole hand.',
    startPosition: 'Sit with your forearm resting on your thigh or a bench, holding a dumbbell with your fingers.',
    process: 'Curl the dumbbell upwards using just your fingers, then slowly lower it back down.',
    muscleMain: ['Flexor Forearm Muscles'],
    muscleAdditional: [],
    image: 'finger-curls',
  },
  {
    id: 'barbell-reverse-wrist-curls',
    name: 'Barbell Reverse Wrist Curls',
    group: ['Forearms'],
    focusPoints:
      'Keep your elbows close to your sides and wrists in a neutral position. Avoid letting the bar roll in your hands.',
    startPosition: 'Sit on a bench with your forearms resting on your thighs, holding a barbell with an overhand grip.',
    process: 'Curl the barbell upwards by extending your wrists, then slowly lower back to the starting position.',
    muscleMain: ['Extensor Forearm Muscles'],
    muscleAdditional: [],
    image: 'barbell-reverse-wrist-curls',
  },
  {
    id: 'hammer-grip-wrist-curls',
    name: 'Hammer Grip Wrist Curls',
    group: ['Forearms'],
    focusPoints: 'Maintain a neutral wrist position throughout the movement.',
    startPosition:
      'Sit on a bench with your forearms resting on your thighs, holding dumbbells in a hammer grip (palms facing each other).',
    process: 'Curl the dumbbells upwards by flexing your wrists, then slowly lower back to the starting position.',
    muscleMain: ['Flexor Forearm Muscles'],
    muscleAdditional: [],
    image: 'hammer-grip-wrist-curls',
  },
  {
    id: 'barbell-wrist-curls',
    name: 'Barbell Wrist Curls',
    group: ['Forearms'],
    focusPoints: 'Keep your forearms stable and focus on moving only your wrists.',
    startPosition:
      'Sit on a bench with your forearms resting on your thighs, holding a barbell with an underhand grip.',
    process: 'Curl the barbell upwards by flexing your wrists, then slowly lower back to the starting position.',
    muscleMain: ['Flexor Forearm Muscles'],
    muscleAdditional: [],
    image: 'barbell-wrist-curls',
  },
  {
    id: 'reverse-standing-wrist-curl',
    name: 'Reverse Standing Wrist Curl',
    group: ['Forearms'],
    focusPoints: 'Keep your elbows slightly bent and wrists neutral. Avoid swinging the bar.',
    startPosition: 'Stand with feet shoulder-width apart, holding a barbell with an overhand grip at hip level.',
    process: 'Extend your wrists to raise the barbell, then slowly lower it back to the starting position.',
    muscleMain: ['Extensor Forearm Muscles'],
    muscleAdditional: [],
    image: 'reverse-standing-wrist-curl',
  },
  {
    id: 'cable-wrist-curls',
    name: 'Cable Wrist Curls',
    group: ['Forearms'],
    focusPoints: 'Keep your wrist movements controlled and avoid using your whole arm.',
    startPosition:
      'Sit on a bench with your forearms resting on your thighs, holding a cable attachment with an underhand grip.',
    process: 'Curl the cable upwards by flexing your wrists, then slowly lower back to the starting position.',
    muscleMain: ['Flexor Forearm Muscles'],
    muscleAdditional: [],
    image: 'cable-wrist-curls',
  },
  {
    id: 'wrist-curls-with-dumbbells',
    name: 'Wrist Curls with Dumbbells',
    group: ['Forearms'],
    focusPoints: 'Maintain a firm grip on the dumbbells and avoid letting them roll.',
    startPosition:
      'Sit on a bench with your forearms resting on your thighs, holding dumbbells with an underhand grip.',
    process: 'Curl the dumbbells upwards by flexing your wrists, then slowly lower back to the starting position.',
    muscleMain: ['Flexor Forearm Muscles'],
    muscleAdditional: [],
    image: 'wrist-curls-with-dumbbells',
  },
  {
    id: 'banded-mountain-climbers',
    name: 'Banded Mountain Climbers',
    group: ['Thighs', 'Abs'],
    focusPoints:
      'Keep your body straight and core engaged throughout the exercise. Avoid letting your hips drop or rise too high.',
    startPosition:
      'Start in a plank position with a resistance band looped around your feet and hands placed shoulder-width apart.',
    process:
      'Drive one knee towards your chest while keeping the other leg extended. Quickly switch legs in a running motion, keeping tension on the band.',
    muscleMain: ['Quadriceps', 'Hip Flexors'],
    muscleAdditional: ['Core', 'Shoulders'],
    image: 'banded-mountain-climbers',
  },
  {
    id: 'leg-extensions',
    name: 'Leg Extensions',
    group: ['Thighs'],
    focusPoints: 'Keep your back pressed against the backrest and avoid locking your knees at the top of the movement.',
    startPosition: 'Sit on a leg extension machine with your legs under the padded bar and hands holding the handles.',
    process:
      'Extend your legs by straightening your knees until they are fully extended. Slowly return to the starting position.',
    muscleMain: ['Quadriceps'],
    muscleAdditional: [],
    image: 'leg-extensions',
  },
  {
    id: 'barbell-squats',
    name: 'Barbell Squats',
    group: ['Thighs', 'Butt'],
    focusPoints:
      'Keep your chest up and back straight. Engage your core and ensure your knees track over your toes without collapsing inward.',
    startPosition: 'Stand with feet shoulder-width apart, holding a barbell across your upper back.',
    process:
      'Lower your body by bending your knees and hips, as if sitting back into a chair, until your thighs are parallel to the ground. Push through your heels to return to the starting position.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Calves', 'Core'],
    image: 'barbell-squats',
  },
  {
    id: 'lying-leg-curl',
    name: 'Lying Leg Curl',
    group: ['Thighs'],
    focusPoints:
      'Keep your hips down and avoid lifting them off the pad. Move in a controlled manner to avoid using momentum.',
    startPosition:
      'Lie face down on a leg curl machine with your legs under the padded bar and hands holding the handles.',
    process:
      'Curl your legs up towards your glutes, squeezing the hamstrings, and then slowly lower back to the starting position.',
    muscleMain: ['Hamstrings'],
    muscleAdditional: [],
    image: 'lying-leg-curl',
  },
  {
    id: 'cable-hip-adduction',
    name: 'Cable Hip Adduction',
    group: ['Thighs'],
    focusPoints:
      'Maintain an upright posture and engage your core. Focus on using your inner thigh muscles to move the leg.',
    startPosition:
      'Stand next to a cable machine with the ankle strap attached to the leg farthest from the machine. The cable should be set at the lowest setting.',
    process:
      'Slowly bring your leg across your body, squeezing your inner thigh muscles. Return to the starting position with control. Repeat for the other leg.',
    muscleMain: ['Adductors'],
    muscleAdditional: ['Core'],
    image: 'cable-hip-adduction',
  },
  {
    id: 'seated-leg-press',
    name: 'Seated Leg Press',
    group: ['Thighs', 'Butt'],
    focusPoints: 'Keep your back flat against the pad and avoid locking your knees at the top of the movement.',
    startPosition:
      'Sit on the leg press machine with your feet shoulder-width apart on the platform. Adjust the seat so your knees are at a 90-degree angle.',
    process:
      'Push the platform away by extending your legs, then slowly return to the starting position, keeping tension on the muscles.',
    muscleMain: ['Quadriceps'],
    muscleAdditional: ['Glutes', 'Hamstrings'],
    image: 'seated-leg-press',
  },
  {
    id: 'side-lunge',
    name: 'Side Lunge',
    group: ['Thighs', 'Butt'],
    focusPoints: 'Keep your chest up and core engaged. Ensure your leading knee does not extend past your toes.',
    startPosition: 'Stand with feet together and hands at your hips or holding weights.',
    process:
      'Step out to the side with one leg, bending the knee and pushing your hips back as you lower into a lunge. Keep the other leg straight. Return to the starting position and repeat on the other side.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Adductors', 'Hamstrings'],
    image: 'side-lunge',
  },
  {
    id: 'dumbbell-lunges',
    name: 'Dumbbell Lunges',
    group: ['Thighs', 'Butt'],
    focusPoints:
      'Maintain an upright posture and ensure your front knee aligns with your ankle. Engage your core for stability.',
    startPosition: 'Stand with feet together, holding dumbbells at your sides.',
    process:
      'Step forward with one leg, lowering your body until both knees are bent at about 90 degrees. Push off the front foot to return to the starting position. Repeat with the other leg.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Calves'],
    image: 'dumbbell-lunges',
  },
  {
    id: 'dumbbell-squats',
    name: 'Dumbbell Squats',
    group: ['Thighs', 'Butt'],
    focusPoints: 'Keep your chest up and back straight. Engage your core and ensure your knees track over your toes.',
    startPosition: 'Stand with feet shoulder-width apart, holding dumbbells at your sides.',
    process:
      'Lower your body by bending your knees and hips, as if sitting back into a chair, until your thighs are parallel to the ground. Push through your heels to return to the starting position.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Core'],
    image: 'dumbbell-squats',
  },
  {
    id: 'step-ups',
    name: 'Step-Ups',
    group: ['Thighs', 'Butt'],
    focusPoints:
      'Keep your torso upright and core engaged. Use the lead leg to push up onto the platform, avoiding using the trailing leg for momentum.',
    startPosition: 'Stand facing a platform or bench with feet hip-width apart.',
    process:
      'Step onto the platform with one leg, pushing through the heel to lift your body up. Step back down with control and alternate legs.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Calves'],
    image: 'step-ups',
  },
  {
    id: 'front-squats',
    name: 'Front Squats',
    group: ['Thighs', 'Butt'],
    focusPoints:
      'Keep your elbows high and chest up. Engage your core and ensure your knees track over your toes without collapsing inward.',
    startPosition:
      'Stand with feet shoulder-width apart, holding a barbell across the front of your shoulders with elbows pointing forward.',
    process:
      'Lower your body by bending your knees and hips, keeping your back straight. Lower until your thighs are parallel to the ground or as low as you can comfortably go. Push through your heels to return to the starting position.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Core'],
    image: 'front-squats',
  },
  {
    id: 'step-ups-sideways-with-dumbbells',
    name: 'Step-Ups Sideways with Dumbbells',
    group: ['Thighs', 'Butt'],
    focusPoints:
      'Keep your torso upright and engage your core. Step onto the platform with control, avoiding using momentum from the trailing leg.',
    startPosition: 'Stand next to a platform or bench with feet hip-width apart, holding dumbbells at your sides.',
    process:
      'Step up sideways onto the platform with one leg, pushing through your heel to lift your body. Step back down and repeat on the other side.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Calves'],
    image: 'step-ups-sideways-with-dumbbells',
  },
  {
    id: 'hack-squats',
    name: 'Hack Squats',
    group: ['Thighs', 'Butt'],
    focusPoints:
      'Keep your back flat against the pad and avoid locking your knees at the top of the movement. Focus on driving through your heels.',
    startPosition:
      'Stand on the platform of a hack squat machine with your shoulders under the pads and feet shoulder-width apart.',
    process:
      'Lower the weight by bending your knees and hips, keeping your back flat against the pad. Push through your heels to return to the starting position.',
    muscleMain: ['Quadriceps'],
    muscleAdditional: ['Glutes', 'Hamstrings'],
    image: 'hack-squats',
  },
  {
    id: 'sumo-deadlift',
    name: 'Sumo Deadlift',
    group: ['Thighs', 'Butt', 'Back'],
    focusPoints:
      'Keep your back straight and core engaged. The bar should stay close to your body throughout the movement.',
    startPosition:
      'Stand with feet wider than shoulder-width apart and toes pointing outwards. Grip the barbell with hands shoulder-width apart.',
    process:
      'Lower your hips and bend your knees to grasp the barbell. Lift the bar by extending your hips and knees, keeping your back straight. As the bar passes your knees, thrust your hips forward to stand up straight. Lower the bar back down with control.',
    muscleMain: ['Glutes', 'Hamstrings'],
    muscleAdditional: ['Lower Back', 'Quadriceps', 'Core'],
    image: 'sumo-deadlift',
  },
  {
    id: 'hanging-leg-curls',
    name: 'Hanging Leg Curls',
    group: ['Thighs', 'Butt'],
    focusPoints: 'Engage your core and avoid swinging your body. Focus on using your hamstrings to lift your legs.',
    startPosition: 'Hang from a pull-up bar with arms extended and legs straight.',
    process: 'Bend your knees to bring your heels towards your glutes, then lower back down with control.',
    muscleMain: ['Hamstrings'],
    muscleAdditional: ['Glutes', 'Core'],
    image: 'hanging-leg-curls',
  },
  {
    id: 'percher-squat',
    name: 'Percher Squat',
    group: ['Thighs', 'Butt'],
    focusPoints: 'Keep your chest up and core engaged. Ensure your knees track over your toes.',
    startPosition: 'Stand with feet shoulder-width apart, holding a barbell across your upper back.',
    process:
      'Lower your body by bending your knees and hips, as if sitting back into a chair, until your thighs are parallel to the ground. Push through your heels to return to the starting position.',
    muscleMain: ['Quadriceps', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Core'],
    image: 'percher-squat',
  },
  {
    id: 'hip-adduction',
    name: 'Hip Adduction',
    group: ['Thighs'],
    focusPoints: 'Maintain a controlled movement and avoid using momentum. Focus on squeezing your inner thighs.',
    startPosition: 'Sit on a hip adduction machine with your legs placed inside the pads.',
    process: 'Bring your legs together against the resistance, then slowly return to the starting position.',
    muscleMain: ['Adductors'],
    muscleAdditional: [],
    image: 'hip-adduction',
  },
  {
    id: 'assisted-pull-up',
    name: 'Assisted Pull-Up',
    group: ['Back'],
    focusPoints: 'Engage your core and keep your shoulders down. Avoid using momentum to lift your body.',
    startPosition:
      'Stand on the platform of an assisted pull-up machine or place your knees on the pad, grasping the handles with an overhand grip.',
    process: 'Pull your body upwards until your chin is above the bar, then lower back down with control.',
    muscleMain: ['Latissimus Dorsi'],
    muscleAdditional: ['Biceps', 'Upper Back', 'Core'],
    image: 'assisted-pull-up',
  },
  {
    id: 'lat-pulldown-on-the-machine',
    name: 'Lat Pulldown on the Machine',
    group: ['Back'],
    focusPoints:
      'Keep your chest lifted and avoid leaning back too far. Focus on pulling with your back muscles rather than your arms.',
    startPosition:
      'Sit on a lat pulldown machine with your feet flat on the floor. Grasp the bar with a wide overhand grip.',
    process:
      'Pull the bar down towards your chest, squeezing your shoulder blades together. Slowly return the bar to the starting position.',
    muscleMain: ['Latissimus Dorsi'],
    muscleAdditional: ['Biceps', 'Upper Back'],
    image: 'lat-pulldown-on-the-machine',
  },
  {
    id: 'back-extension',
    name: 'Back Extension',
    group: ['Back'],
    focusPoints:
      'Keep your back straight and engage your core. Avoid hyperextending your spine at the top of the movement.',
    startPosition:
      'Position yourself face down on a back extension bench, with your ankles secured and your hips over the pad.',
    process:
      'Lower your upper body towards the floor by bending at the waist, then raise back up until your body forms a straight line.',
    muscleMain: ['Erector Spinae'],
    muscleAdditional: ['Glutes', 'Hamstrings'],
    image: 'back-extension',
  },
  {
    id: 'lying-back-extension',
    name: 'Lying Back Extension',
    group: ['Back'],
    focusPoints:
      'Engage your core and keep your movements controlled. Avoid lifting your legs off the ground too high.',
    startPosition: 'Lie face down on a mat with your arms extended overhead and legs straight.',
    process:
      'Lift your chest and legs off the ground simultaneously, contracting your lower back muscles. Lower back down with control.',
    muscleMain: ['Erector Spinae'],
    muscleAdditional: ['Glutes', 'Hamstrings'],
    image: 'lying-back-extension',
  },
  {
    id: 'banded-good-mornings',
    name: 'Banded Good Mornings',
    group: ['Back', 'Butt', 'Thighs'],
    focusPoints:
      'Keep your back straight and engage your core. Focus on hinging at the hips rather than bending at the waist.',
    startPosition:
      'Stand on a resistance band with feet shoulder-width apart, holding the band handles at your shoulders with the band looped around your neck and upper back.',
    process:
      'Hinge at the hips, lowering your torso towards the ground while keeping your back straight. Return to the starting position by squeezing your glutes and extending your hips.',
    muscleMain: ['Erector Spinae', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Core'],
    image: 'banded-good-mornings',
  },
  {
    id: 'pull-ups',
    name: 'Pull-Ups',
    group: ['Back'],
    focusPoints: 'Engage your core and avoid swinging your body. Focus on pulling your chest towards the bar.',
    startPosition: 'Hang from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.',
    process: 'Pull your body upwards until your chin is above the bar, then lower back down with control.',
    muscleMain: ['Latissimus Dorsi'],
    muscleAdditional: ['Biceps', 'Upper Back', 'Core'],
    image: 'pull-ups',
  },
  {
    id: 'cable-deadlift',
    name: 'Cable Deadlift',
    group: ['Back', 'Butt', 'Thighs'],
    focusPoints:
      'Keep your back straight and core engaged throughout the movement. The cable should stay close to your body.',
    startPosition:
      'Stand facing a cable machine with the cable attached to a low pulley. Hold the cable handle with both hands.',
    process:
      'Hinge at the hips, lowering your torso while keeping your back straight. Extend your hips and knees to lift the cable, keeping it close to your body. Lower back down with control.',
    muscleMain: ['Glutes', 'Hamstrings'],
    muscleAdditional: ['Lower Back', 'Core'],
    image: 'cable-deadlift',
  },
  {
    id: 'resistance-band-deadlift',
    name: 'Resistance Band Deadlift',
    group: ['Back', 'Butt', 'Thighs'],
    focusPoints:
      'Maintain a neutral spine and keep the band tight throughout the movement. Focus on using your glutes and hamstrings.',
    startPosition:
      'Stand on a resistance band with feet hip-width apart, holding the band handles or ends in each hand.',
    process:
      'Hinge at the hips, lowering your torso while keeping your back straight. Stand up by extending your hips and knees, pulling against the resistance of the band. Lower back down with control.',
    muscleMain: ['Glutes', 'Hamstrings'],
    muscleAdditional: ['Lower Back', 'Core'],
    image: 'resistance-band-deadlift',
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    group: ['Back', 'Butt', 'Thighs'],
    focusPoints:
      'Keep your back straight and engage your core. Focus on hinging at the hips and keeping the barbell close to your body.',
    startPosition: 'Stand with feet hip-width apart, holding a barbell with an overhand grip at thigh level.',
    process:
      'Lower the barbell by hinging at the hips, keeping your back straight and shoulders back. Stop when you feel a stretch in your hamstrings. Return to the starting position by extending your hips and standing upright.',
    muscleMain: ['Hamstrings', 'Glutes'],
    muscleAdditional: ['Lower Back', 'Core'],
    image: 'romanian-deadlift',
  },
  {
    id: 'seated-back-extension',
    name: 'Seated Back Extension',
    group: ['Back'],
    focusPoints:
      'Keep your back straight and avoid hyperextending your spine. Engage your core throughout the movement.',
    startPosition: 'Sit on a back extension machine with your feet secured and your back against the pad.',
    process:
      'Lean back against the resistance, engaging your lower back muscles, and then return to the starting position with control.',
    muscleMain: ['Erector Spinae'],
    muscleAdditional: ['Glutes', 'Hamstrings'],
    image: 'seated-back-extension',
  },
  {
    id: 'seated-good-mornings',
    name: 'Seated Good Mornings',
    group: ['Back', 'Butt', 'Thighs'],
    focusPoints: 'Maintain a straight back and engage your core. Focus on hinging at the hips.',
    startPosition: 'Sit on a bench with your feet flat on the ground and hold a barbell across your upper back.',
    process:
      'Hinge forward at the hips, lowering your torso while keeping your back straight. Return to the upright position by engaging your glutes and lower back muscles.',
    muscleMain: ['Erector Spinae', 'Glutes'],
    muscleAdditional: ['Hamstrings', 'Core'],
    image: 'seated-good-mornings',
  },
  {
    id: 'dumbbell-deadlift',
    name: 'Dumbbell Deadlift',
    group: ['Back', 'Butt', 'Thighs'],
    focusPoints:
      'Keep your back neutral and engage your core. The dumbbells should stay close to your body throughout the lift.',
    startPosition: 'Stand with feet hip-width apart, holding a dumbbell in each hand at thigh level.',
    process:
      'Hinge at the hips, lowering the dumbbells towards the ground while keeping your back straight. Stand up by extending your hips and knees, keeping the dumbbells close to your body. Lower back down with control.',
    muscleMain: ['Glutes', 'Hamstrings'],
    muscleAdditional: ['Lower Back', 'Core'],
    image: 'dumbbell-deadlift',
  },
  {
    id: 'dumbbell-romanian-deadlift',
    name: 'Dumbbell Romanian Deadlift',
    group: ['Back', 'Butt', 'Thighs'],
    focusPoints:
      'Focus on a slight bend in the knees and hinge at the hips, keeping the back straight. Engage your glutes and hamstrings throughout the movement.',
    startPosition: 'Stand with feet hip-width apart, holding a dumbbell in each hand at thigh level.',
    process:
      'Hinge at the hips, lowering the dumbbells towards the ground, keeping the back straight and a slight bend in the knees. Stand up by extending your hips and knees, keeping the dumbbells close to your body. Lower back down with control.',
    muscleMain: ['Hamstrings', 'Glutes'],
    muscleAdditional: ['Lower Back', 'Core'],
    image: 'dumbbell-romanian-deadlift',
  },
  {
    id: 'good-mornings',
    name: 'Good Mornings',
    group: ['Back', 'Thighs'],
    focusPoints:
      'Keep your back straight and core engaged. The movement should come from the hips, not the lower back.',
    startPosition: 'Stand with feet hip-width apart, barbell resting on your shoulders behind your neck.',
    process:
      'Hinge at the hips, lowering your torso forward while keeping your back straight. Return to the starting position by engaging your hamstrings and glutes.',
    muscleMain: ['Lower Back', 'Hamstrings'],
    muscleAdditional: ['Glutes', 'Core'],
    image: 'good-mornings',
  },
  {
    id: 'stability-ball-back-extension',
    name: 'Stability Ball Back Extension',
    group: ['Back'],
    focusPoints:
      'Maintain a neutral spine throughout the exercise. Avoid overextending the back at the top of the movement.',
    startPosition:
      'Lie face down on a stability ball with your hips on the ball and feet anchored on the ground. Hands should be behind your head or crossed over your chest.',
    process:
      'Extend your back by lifting your chest off the ball, squeezing your lower back muscles. Lower back down with control.',
    muscleMain: ['Lower Back'],
    muscleAdditional: ['Glutes', 'Core'],
    image: 'stability-ball-back-extension',
  },
  {
    id: 'stringt-arm-pulldown',
    name: 'Straight-Arm Pulldown',
    group: ['Back'],
    focusPoints: 'Keep your arms straight throughout the movement. Focus on pulling from your lats, not your arms.',
    startPosition:
      'Stand with feet hip-width apart, facing a cable machine with a straight bar attached at the high pulley. Hold the bar with a shoulder-width grip.',
    process:
      'Pull the bar down towards your thighs while keeping your arms straight and engaging your lats. Slowly return to the starting position with control.',
    muscleMain: ['Lats'],
    muscleAdditional: ['Shoulders', 'Core'],
    image: 'stringt-arm-pulldown',
  },
  {
    id: 'hyperextension-on-the-bench',
    name: 'Hyperextension on the Bench',
    group: ['Back'],
    focusPoints: 'Focus on controlled movements and avoid using momentum. Keep your back neutral and engage your core.',
    startPosition: 'Lie face down on a hyperextension bench with your hips supported and feet anchored.',
    process:
      'Lower your upper body towards the ground while keeping your back straight. Lift your torso back to the starting position using your lower back muscles.',
    muscleMain: ['Lower Back'],
    muscleAdditional: ['Glutes', 'Hamstrings'],
    image: 'hyperextension-on-the-bench',
  },
  {
    id: 'inverted-row',
    name: 'Inverted Row',
    group: ['Back'],
    focusPoints:
      'Keep your body straight and core engaged throughout the exercise. Pull with your back muscles rather than your arms.',
    startPosition:
      'Lie underneath a bar set at waist height. Grab the bar with an overhand grip, hands shoulder-width apart.',
    process: 'Pull your chest towards the bar while keeping your body straight. Lower yourself back down with control.',
    muscleMain: ['Upper Back', 'Lats'],
    muscleAdditional: ['Biceps', 'Core'],
    image: 'inverted-row',
  },
  {
    id: 'wide-grip-pull-ups',
    name: 'Wide-Grip Pull-Ups',
    group: ['Back'],
    focusPoints: 'Use a wide grip to focus on the upper back and lats. Keep your body straight and avoid swinging.',
    startPosition: 'Hang from a pull-up bar with a wide overhand grip.',
    process: 'Pull your chest up towards the bar, focusing on using your back muscles. Lower back down with control.',
    muscleMain: ['Lats', 'Upper Back'],
    muscleAdditional: ['Biceps', 'Shoulders'],
    image: 'wide-grip-pull-ups',
  },
  {
    id: 'band-calf-raise',
    name: 'Band Calf Raise',
    group: ['Calves'],
    focusPoints:
      'Keep your knees slightly bent and maintain a controlled motion. Engage your calves throughout the movement.',
    startPosition:
      'Stand with feet hip-width apart, a resistance band looped around the balls of your feet and held at your sides.',
    process:
      'Raise your heels off the ground, stretching the band, and hold at the top for a second. Lower back down slowly.',
    muscleMain: ['Calves'],
    muscleAdditional: [],
    image: 'band-calf-raise',
  },
  {
    id: 'seated-dumbbell-calf-raise',
    name: 'Seated Dumbbell Calf Raise',
    group: ['Calves'],
    focusPoints: 'Focus on a full range of motion, from the heels touching the ground to fully raising the heels.',
    startPosition: 'Sit on a bench with feet flat on the ground and a dumbbell resting on each knee.',
    process: 'Raise your heels off the ground as high as possible, then lower them back down with control.',
    muscleMain: ['Calves'],
    muscleAdditional: [],
    image: 'seated-dumbbell-calf-raise',
  },
  {
    id: 'calf-raises',
    name: 'Calf Raises',
    group: ['Calves'],
    focusPoints: 'Keep your knees straight and focus on contracting the calf muscles.',
    startPosition: 'Stand with feet hip-width apart.',
    process:
      'Raise your heels off the ground as high as possible, hold for a second, then lower back down with control.',
    muscleMain: ['Calves'],
    muscleAdditional: [],
    image: 'calf-raises',
  },
  {
    id: 'seated-machine-calf-raises',
    name: 'Seated Machine Calf Raises',
    group: ['Calves'],
    focusPoints: 'Adjust the machine so that your knees are at a 90-degree angle. Focus on a full range of motion.',
    startPosition: 'Sit on the calf raise machine with your feet flat on the foot platform.',
    process: 'Raise your heels as high as possible, then lower them back down under control.',
    muscleMain: ['Calves'],
    muscleAdditional: [],
    image: 'seated-machine-calf-raises',
  },
  {
    id: 'donkey-calf-raise',
    name: 'Donkey Calf Raise',
    group: ['Calves'],
    focusPoints: 'Keep your back straight and focus on the contraction of the calf muscles.',
    startPosition: 'Lean forward onto a platform with your hips bent at a 90-degree angle and feet flat on the ground.',
    process:
      'Raise your heels off the ground, focusing on the contraction of your calves, then lower back down slowly.',
    muscleMain: ['Calves'],
    muscleAdditional: [],
    image: 'donkey-calf-raise',
  },
  {
    id: 'standing-barbell-calf-raise',
    name: 'Standing Barbell Calf Raise',
    group: ['Calves'],
    focusPoints: 'Maintain a controlled motion and avoid bouncing. Keep your knees slightly bent.',
    startPosition: 'Stand with feet hip-width apart, holding a barbell across your shoulders.',
    process: 'Raise your heels off the ground as high as possible, then lower them back down slowly.',
    muscleMain: ['Calves'],
    muscleAdditional: [],
    image: 'standing-barbell-calf-raise',
  },
  {
    id: 'seated-barbell-calf-raise',
    name: 'Seated Barbell Calf Raise',
    group: ['Calves'],
    focusPoints: 'Use a full range of motion, from heels touching the ground to fully raising the heels.',
    startPosition: 'Sit on a bench with feet flat on the ground, a barbell resting on your thighs.',
    process: 'Raise your heels off the ground as high as possible, then lower them back down slowly.',
    muscleMain: ['Calves'],
    muscleAdditional: [],
    image: 'seated-barbell-calf-raise',
  },
  {
    id: 'standing-calf-raise',
    name: 'Standing Calf Raise',
    group: ['Calves'],
    focusPoints:
      'Keep your knees straight and focus on the contraction of the calf muscles. Use a slow and controlled motion.',
    startPosition: 'Stand with feet hip-width apart.',
    process: 'Raise your heels off the ground as high as possible, then lower them back down slowly.',
    muscleMain: ['Calves'],
    muscleAdditional: [],
    image: 'standing-calf-raise',
  },
  {
    id: 'barbell-shrugs',
    name: 'Barbell Shrugs',
    group: ['Neck', 'Shoulders'],
    focusPoints:
      'Keep your arms straight and shoulders relaxed at the start. Lift your shoulders as high as possible without bending your elbows.',
    startPosition:
      'Stand with feet shoulder-width apart, holding a barbell with an overhand grip in front of your thighs.',
    process:
      'Shrug your shoulders up towards your ears, squeezing your trapezius muscles at the top. Lower the barbell back down with control.',
    muscleMain: ['Trapezius'],
    muscleAdditional: ['Shoulders'],
    image: 'barbell-shrugs',
  },
  {
    id: 'resistance-band-row',
    name: 'Resistance Band Row',
    group: ['Back', 'Shoulders'],
    focusPoints:
      'Keep your back straight and core engaged. Squeeze your shoulder blades together at the end of the pull.',
    startPosition: 'Secure a resistance band at a low point and stand holding the handles with arms extended.',
    process:
      'Pull the handles towards your torso, leading with your elbows. Slowly return to the starting position with control.',
    muscleMain: ['Upper Back', 'Lats'],
    muscleAdditional: ['Biceps', 'Shoulders'],
    image: 'resistance-band-row',
  },
  {
    id: 'cable-lat-pulldown',
    name: 'Cable Lat Pulldown',
    group: ['Back'],
    focusPoints: 'Keep your chest up and avoid using momentum. Pull with your back muscles, not your arms.',
    startPosition: 'Sit at a lat pulldown machine with a wide grip on the bar, arms fully extended.',
    process:
      'Pull the bar down towards your chest, focusing on squeezing your lats. Slowly return to the starting position.',
    muscleMain: ['Lats'],
    muscleAdditional: ['Biceps', 'Shoulders'],
    image: 'cable-lat-pulldown',
  },
  {
    id: 'resistance-band-shrugs',
    name: 'Resistance Band Shrugs',
    group: ['Neck', 'Shoulders'],
    focusPoints:
      'Maintain straight arms and lift your shoulders as high as possible, squeezing your trapezius muscles.',
    startPosition:
      'Stand on a resistance band with feet shoulder-width apart, holding the ends of the band at your sides.',
    process: 'Shrug your shoulders upwards, then lower back down with control.',
    muscleMain: ['Trapezius'],
    muscleAdditional: ['Shoulders'],
    image: 'resistance-band-shrugs',
  },
  {
    id: 'cable-lat-pulldown-close-grip',
    name: 'Cable Lat Pulldown (Close Grip)',
    group: ['Back'],
    focusPoints: 'Focus on a full range of motion and engage your core to stabilize your body.',
    startPosition: 'Sit at a lat pulldown machine with a close grip on the bar, palms facing towards you.',
    process:
      'Pull the bar down to your chest, squeezing your lats at the bottom. Slowly return to the starting position.',
    muscleMain: ['Lats'],
    muscleAdditional: ['Biceps', 'Shoulders'],
    image: 'cable-lat-pulldown-close-grip',
  },
  {
    id: 'cable-shrugs',
    name: 'Cable Shrugs',
    group: ['Neck', 'Shoulders'],
    focusPoints: 'Keep your arms straight and lift your shoulders as high as possible, squeezing at the top.',
    startPosition:
      'Stand with feet shoulder-width apart, holding the handles of a low cable pulley with arms straight.',
    process: 'Shrug your shoulders up towards your ears, then lower them back down with control.',
    muscleMain: ['Trapezius'],
    muscleAdditional: ['Shoulders'],
    image: 'cable-shrugs',
  },
  {
    id: 'reverse-fly',
    name: 'Reverse Fly',
    group: ['Back', 'Shoulders'],
    focusPoints:
      'Keep a slight bend in your elbows and maintain a flat back. Focus on squeezing your shoulder blades together.',
    startPosition:
      'Stand bent over with a slight bend in the knees, holding dumbbells in each hand, arms hanging down.',
    process:
      'Lift the weights out to the sides until your arms are parallel with the ground, then lower them back down with control.',
    muscleMain: ['Upper Back', 'Rear Deltoids'],
    muscleAdditional: ['Trapezius'],
    image: 'reverse-fly',
  },
  {
    id: 'dumbbell-upright-row',
    name: 'Dumbbell Upright Row',
    group: ['Shoulders', 'Traps'],
    focusPoints:
      'Keep your back straight and avoid using momentum. Focus on lifting the dumbbells with your shoulders.',
    startPosition:
      'Stand with your feet shoulder-width apart, holding dumbbells in each hand with an overhand grip, arms fully extended.',
    process:
      'Lift the dumbbells straight up towards your chin, keeping them close to your body. Elbows should point outward. Lower the weights back down with control.',
    muscleMain: ['Deltoids', 'Trapezius'],
    muscleAdditional: ['Biceps'],
    image: 'dumbbell-upright-row',
  },
  {
    id: 'seated-machine-row',
    name: 'Seated Machine Row',
    group: ['Back', 'Shoulders'],
    focusPoints:
      'Keep your chest pressed against the pad and pull with your back muscles. Avoid rounding your shoulders.',
    startPosition: 'Sit on the machine, grasp the handles with an overhand grip, and place your feet on the platform.',
    process:
      'Pull the handles towards your torso, squeezing your shoulder blades together. Return to the starting position with control.',
    muscleMain: ['Latissimus Dorsi', 'Rhomboids'],
    muscleAdditional: ['Biceps'],
    image: 'seated-machine-row',
  },
  {
    id: 'incline-dumbbell-row',
    name: 'Incline Dumbbell Row',
    group: ['Back', 'Shoulders'],
    focusPoints: 'Maintain a flat back and avoid swinging the weights. Focus on using your back muscles to lift.',
    startPosition:
      'Lie face down on an incline bench, holding dumbbells with an overhand grip, arms extended towards the ground.',
    process:
      'Row the dumbbells up towards your ribs, keeping your elbows close to your body. Lower the weights back down with control.',
    muscleMain: ['Latissimus Dorsi', 'Rhomboids'],
    muscleAdditional: ['Biceps'],
    image: 'incline-dumbbell-row',
  },
  {
    id: 'shrugs',
    name: 'Shrugs',
    group: ['Neck', 'Shoulders'],
    focusPoints: 'Keep your back straight and shoulders relaxed. Avoid using your arms to lift the weights.',
    startPosition: 'Stand with feet shoulder-width apart, holding dumbbells at your sides with an overhand grip.',
    process: 'Elevate your shoulders towards your ears as high as possible, then lower them back down with control.',
    muscleMain: ['Trapezius'],
    muscleAdditional: ['Levator Scapulae'],
    image: 'shrugs',
  },
  {
    id: 'neck-lat-pulldown',
    name: 'Neck Lat Pulldown',
    group: ['Back', 'Neck'],
    focusPoints: 'Maintain a straight back and avoid pulling the bar behind your neck excessively to prevent injury.',
    startPosition: 'Sit on the lat pulldown machine, grasp the bar with a wide overhand grip, and lean slightly back.',
    process:
      'Pull the bar down to the back of your neck, squeezing your shoulder blades together. Slowly return the bar to the starting position.',
    muscleMain: ['Latissimus Dorsi', 'Trapezius'],
    muscleAdditional: ['Rhomboids'],
    image: 'neck-lat-pulldown',
  },
  {
    id: 'neck-pull-ups',
    name: 'Neck Pull-ups',
    group: ['Neck', 'Back'],
    focusPoints: 'Ensure proper neck alignment and avoid excessive strain. Focus on controlled movement.',
    startPosition: 'Hang from a pull-up bar with an overhand grip, arms fully extended.',
    process:
      'Pull your body up, bringing your head to one side of the bar, focusing on using neck and upper back muscles. Lower yourself back down with control and repeat on the other side.',
    muscleMain: ['Trapezius', 'Levator Scapulae'],
    muscleAdditional: ['Latissimus Dorsi'],
    image: 'neck-pull-ups',
  },
  {
    id: 't-bar-row',
    name: 'T-Bar Row',
    group: ['Back', 'Shoulders'],
    focusPoints: 'Keep your back straight and use your back muscles to lift the weight. Avoid rounding your shoulders.',
    startPosition:
      'Stand over the T-bar row apparatus, with feet shoulder-width apart and knees slightly bent. Grasp the handles with an overhand grip.',
    process:
      'Pull the handles towards your lower chest, squeezing your shoulder blades together. Lower the weight back down with control.',
    muscleMain: ['Latissimus Dorsi', 'Rhomboids'],
    muscleAdditional: ['Biceps'],
    image: 't-bar-row',
  },
  {
    id: 'prone-incline-dumbbell-shrug',
    name: 'Prone Incline Dumbbell Shrug',
    group: ['Neck', 'Shoulders'],
    focusPoints:
      'Focus on squeezing the shoulder blades together at the top of the movement. Avoid using your arms to lift the weight.',
    startPosition:
      'Lie face down on an incline bench, holding a dumbbell in each hand with a neutral grip. Allow your arms to hang straight down.',
    process:
      'Shrug your shoulders up towards your ears, squeezing your shoulder blades together. Lower the weights back down with control.',
    muscleMain: ['Trapezius'],
    muscleAdditional: ['Deltoids'],
    image: 'prone-incline-dumbbell-shrug',
  },
  {
    id: 'upright-barbell-row',
    name: 'Upright Barbell Row',
    group: ['Shoulders', 'Neck'],
    focusPoints:
      'Keep the bar close to your body and lift with your elbows leading the movement. Avoid excessive swinging.',
    startPosition:
      'Stand with feet shoulder-width apart, holding a barbell with an overhand grip. Arms should be fully extended.',
    process:
      'Lift the barbell up along your body to chest level, elbows pointing out and up. Lower the bar back to the starting position with control.',
    muscleMain: ['Deltoids'],
    muscleAdditional: ['Trapezius', 'Biceps'],
    image: 'upright-barbell-row',
  },
  {
    id: 'barbell-skull-crusher',
    name: 'Barbell Skull Crusher',
    group: ['Triceps'],
    focusPoints:
      'Keep your elbows in a fixed position throughout the movement. Lower the barbell slowly to avoid injury.',
    startPosition: 'Lie on a flat bench, holding a barbell with a narrow grip. Extend your arms above your chest.',
    process:
      'Bend your elbows to lower the barbell towards your forehead. Extend your arms to return to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: ['Anconeus'],
    image: 'barbell-skull-crusher',
  },
  {
    id: 'bench-dip',
    name: 'Bench Dip',
    group: ['Triceps', 'Chest'],
    focusPoints: 'Lower your body until your upper arms are parallel to the floor. Keep your shoulders down and back.',
    startPosition:
      'Sit on the edge of a bench with your hands next to your hips. Extend your legs out in front of you.',
    process:
      'Lower your body by bending your elbows until your upper arms are parallel to the floor. Push back up to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: ['Pectorals', 'Anterior Deltoids'],
    image: 'bench-dip',
  },
  {
    id: 'bench-press',
    name: 'Bench Press',
    group: ['Chest', 'Triceps', 'Shoulders'],
    focusPoints:
      'Keep your feet flat on the floor and lower the barbell to your chest with control. Do not bounce the bar off your chest.',
    startPosition:
      'Lie on a flat bench with your feet firmly on the ground. Grip the barbell slightly wider than shoulder-width apart.',
    process: 'Lower the barbell to your chest, then press it back up until your arms are fully extended.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Anterior Deltoids'],
    image: 'bench-press',
  },
  {
    id: 'cable-triceps-pushdowns',
    name: 'Cable Triceps Pushdowns',
    group: ['Triceps'],
    focusPoints:
      'Keep your elbows close to your body and avoid using your shoulders. Fully extend your arms at the bottom of the movement.',
    startPosition:
      'Stand facing a cable machine, gripping the bar or rope attachment with an overhand grip. Elbows should be close to your sides.',
    process: 'Push the attachment down until your arms are fully extended. Slowly return to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: ['Anconeus'],
    image: 'cable-triceps-pushdowns',
  },
  {
    id: 'close-grip-bench-press',
    name: 'Close-Grip Bench Press',
    group: ['Triceps', 'Chest'],
    focusPoints: 'Use a close grip and keep your elbows tucked in. Lower the bar with control to your chest.',
    startPosition:
      'Lie on a flat bench, gripping the barbell with hands closer than shoulder-width apart. Feet should be flat on the ground.',
    process: 'Lower the barbell to your chest, then press it back up until your arms are fully extended.',
    muscleMain: ['Triceps'],
    muscleAdditional: ['Pectorals', 'Anterior Deltoids'],
    image: 'close-grip-bench-press',
  },
  {
    id: 'decline-push-ups',
    name: 'Decline Push-Ups',
    group: ['Chest', 'Triceps', 'Shoulders'],
    focusPoints: 'Maintain a straight body line from head to heels. Engage your core and lower yourself with control.',
    startPosition:
      'Place your feet on an elevated surface, hands on the ground shoulder-width apart. Body should be in a plank position.',
    process: 'Lower your chest towards the ground by bending your elbows. Push back up to the starting position.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Anterior Deltoids'],
    image: 'decline-push-ups',
  },
  {
    id: 'dips',
    name: 'Dips',
    group: ['Triceps', 'Chest'],
    focusPoints:
      'Keep your body upright and elbows close to your body. Lower yourself until your upper arms are parallel to the floor.',
    startPosition:
      'Stand between parallel bars and hold the bars with an overhand grip. Lift yourself up so your arms are fully extended.',
    process: 'Lower your body slowly until your elbows are at a 90-degree angle, then press yourself back up.',
    muscleMain: ['Triceps', 'Pectoralis Major'],
    muscleAdditional: ['Deltoids'],
    image: 'dips',
  },
  {
    id: 'dumbbell-seated-overhead-triceps-extension',
    name: 'Dumbbell Seated Overhead Triceps Extension',
    group: ['Triceps'],
    focusPoints:
      'Keep your elbows close to your head and avoid flaring them out. Control the movement during the descent.',
    startPosition:
      'Sit on a bench with your back straight, holding a dumbbell with both hands overhead, arms fully extended.',
    process:
      'Lower the dumbbell behind your head by bending your elbows, then extend your arms to return to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: [],
    image: 'dumbbell-seated-overhead-triceps-extension',
  },
  {
    id: 'dumbbell-skull-crusher',
    name: 'Dumbbell Skull Crusher',
    group: ['Triceps'],
    focusPoints: 'Keep your elbows fixed and close to your head. Avoid moving your upper arms.',
    startPosition: 'Lie on a bench with a dumbbell in each hand, arms extended above your chest.',
    process:
      'Bend your elbows to lower the dumbbells towards your forehead, then extend your arms back to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: [],
    image: 'dumbbell-skull-crusher',
  },
  {
    id: 'dumbbell-triceps-extension',
    name: 'Dumbbell Triceps Extension',
    group: ['Triceps'],
    focusPoints: 'Maintain a stable core and avoid arching your back. Control the weight throughout the movement.',
    startPosition: 'Stand or sit with a dumbbell held in both hands, arms extended overhead.',
    process:
      'Lower the dumbbell behind your head by bending your elbows, then extend your arms to return to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: [],
    image: 'dumbbell-triceps-extension',
  },
  {
    id: 'kickbacks',
    name: 'Kickbacks',
    group: ['Triceps'],
    focusPoints: 'Keep your upper arm stationary and extend your elbow fully. Avoid swinging the dumbbell.',
    startPosition:
      'Stand with a dumbbell in one hand, bend forward at the waist, and keep your upper arm parallel to your torso.',
    process: 'Extend your arm straight back by contracting your triceps, then return to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: [],
    image: 'kickbacks',
  },
  {
    id: 'one-arm-overhead-triceps-extension',
    name: 'One-Arm Overhead Triceps Extension',
    group: ['Triceps'],
    focusPoints:
      'Keep your elbow close to your head and avoid flaring it out. Control the movement during the descent.',
    startPosition: 'Hold a dumbbell in one hand and extend your arm overhead.',
    process:
      'Lower the dumbbell behind your head by bending your elbow, then extend your arm to return to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: [],
    image: 'one-arm-overhead-triceps-extension',
  },
  {
    id: 'overhead-triceps-extension',
    name: 'Overhead Triceps Extension',
    group: ['Triceps'],
    focusPoints:
      'Keep your elbows close to your head and avoid flaring them out. Control the movement during the descent.',
    startPosition: 'Hold a dumbbell or a barbell overhead with both hands, arms fully extended.',
    process:
      'Lower the weight behind your head by bending your elbows, then extend your arms to return to the starting position.',
    muscleMain: ['Triceps'],
    muscleAdditional: [],
    image: 'overhead-triceps-extension',
  },
  {
    id: 'push-ups',
    name: 'Push-Ups',
    group: ['Chest', 'Triceps'],
    focusPoints:
      'Keep your body in a straight line from head to heels. Lower your body until your chest is just above the ground.',
    startPosition: 'Start in a plank position with your hands shoulder-width apart and arms extended.',
    process: 'Lower your body by bending your elbows, then push back up to the starting position.',
    muscleMain: ['Pectoralis Major', 'Triceps'],
    muscleAdditional: ['Deltoids', 'Core'],
    image: 'push-ups',
  },
  {
    id: 'push-ups-with-exercise-ball',
    name: 'Push-Ups with Exercise Ball',
    group: ['Chest', 'Triceps'],
    focusPoints:
      'Maintain a straight line from head to heels, and engage your core throughout the movement. Keep your elbows at a 45-degree angle.',
    startPosition:
      'Place your hands on the exercise ball, slightly wider than shoulder-width apart. Extend your legs back so that your body forms a straight line.',
    process:
      'Lower your chest towards the ball by bending your elbows. Push back up to the starting position while keeping your body straight.',
    muscleMain: ['Pectoralis Major', 'Triceps Brachii'],
    muscleAdditional: ['Deltoids', 'Core'],
    image: 'push-ups-with-exercise-ball',
  },
  {
    id: 'resistance-band-kickbacks',
    name: 'Resistance Band Kickbacks',
    group: ['Triceps'],
    focusPoints:
      'Keep your upper arms stationary and your elbows close to your body. Focus on contracting your triceps.',
    startPosition:
      'Stand with feet shoulder-width apart, holding the resistance band handles. Bend forward slightly at the waist with a slight bend in your knees.',
    process:
      'Extend your arms straight back, squeezing your triceps at the top of the movement. Return to the starting position with control.',
    muscleMain: ['Triceps Brachii'],
    muscleAdditional: ['Deltoids'],
    image: 'resistance-band-kickbacks',
  },
  {
    id: 'triceps-cable-kickbacks',
    name: 'Triceps Cable Kickbacks',
    group: ['Triceps'],
    focusPoints:
      'Keep your upper arms stationary and your elbows close to your body. Focus on a slow and controlled movement.',
    startPosition:
      'Stand facing the cable machine with a low pulley. Hold the handle with one hand, bent at the elbow.',
    process:
      'Extend your arm backward, keeping your upper arm stationary. Squeeze your triceps at the top, then return to the starting position.',
    muscleMain: ['Triceps Brachii'],
    muscleAdditional: ['Deltoids'],
    image: 'triceps-cable-kickbacks',
  },
  {
    id: 'barbell-curls',
    name: 'Barbell Curls',
    group: ['Biceps'],
    focusPoints:
      'Keep your elbows close to your body and avoid swinging the barbell. Focus on a slow and controlled movement.',
    startPosition:
      "Stand with feet shoulder-width apart, holding the barbell with an underhand grip. Let the bar hang at arm's length.",
    process:
      'Curl the barbell towards your chest, keeping your elbows stationary. Squeeze your biceps at the top, then lower the bar back down with control.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis', 'Forearms'],
    image: 'barbell-curls',
  },
  {
    id: 'high-cable-curls',
    name: 'High Cable Curls',
    group: ['Biceps'],
    focusPoints:
      'Keep your elbows up and stationary throughout the movement. Focus on squeezing the biceps at the top.',
    startPosition:
      'Stand in the middle of a cable machine with the pulleys set to high. Hold the handles with an underhand grip.',
    process:
      'Curl the handles towards your head, keeping your upper arms parallel to the floor. Squeeze your biceps at the top, then slowly lower the handles back down.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis', 'Forearms'],
    image: 'high-cable-curls',
  },
  {
    id: 'biceps-curls',
    name: 'Biceps Curls',
    group: ['Biceps'],
    focusPoints:
      'Keep your elbows close to your body and avoid using momentum. Focus on a slow and controlled lift and lower.',
    startPosition:
      'Stand with feet shoulder-width apart, holding dumbbells with an underhand grip. Let your arms hang at your sides.',
    process:
      'Curl the dumbbells towards your shoulders, keeping your elbows stationary. Squeeze your biceps at the top, then lower the weights back down with control.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis', 'Forearms'],
    image: 'biceps-curls',
  },
  {
    id: 'incline-bench-preacher-curls',
    name: 'Incline Bench Preacher Curls',
    group: ['Biceps'],
    focusPoints:
      'Keep your upper arms against the bench pad and avoid swinging the weights. Focus on squeezing the biceps.',
    startPosition:
      'Sit on an incline bench with your arms resting on the preacher pad. Hold the dumbbells with an underhand grip.',
    process:
      'Curl the dumbbells towards your shoulders, keeping your upper arms stationary. Squeeze your biceps at the top, then slowly lower the weights back down.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis'],
    image: 'incline-bench-preacher-curls',
  },
  {
    id: 'cable-curls',
    name: 'Cable Curls',
    group: ['Biceps'],
    focusPoints: 'Keep elbows close to your sides, and use a full range of motion for optimal muscle engagement.',
    startPosition:
      'Stand facing the cable machine, with the handle attached to the low pulley. Hold the handle with an underhand grip, arms fully extended.',
    process:
      'Curl the handle towards your shoulders, keeping your elbows stationary. Squeeze your biceps at the top and lower the handle back down with control.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis', 'Brachioradialis'],
    image: 'cable-curls',
  },
  {
    id: 'incline-dumbbell-biceps-curls',
    name: 'Incline Dumbbell Biceps Curls',
    group: ['Biceps'],
    focusPoints:
      'Maintain a controlled movement and avoid swinging the weights. Focus on using the biceps to lift the weights.',
    startPosition: 'Sit on an incline bench, holding a dumbbell in each hand with your arms fully extended downwards.',
    process:
      'Curl the dumbbells up towards your shoulders, keeping your upper arms stationary. Lower the dumbbells back down slowly.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis'],
    image: 'incline-dumbbell-biceps-curls',
  },
  {
    id: 'cable-row',
    name: 'Cable Row',
    group: ['Back', 'Biceps'],
    focusPoints: 'Keep your back straight and shoulders back. Focus on squeezing your back muscles as you row.',
    startPosition:
      'Sit at the cable row machine with your feet on the footplate, grasping the handle with an overhand grip.',
    process:
      'Pull the handle towards your torso, squeezing your shoulder blades together. Slowly return to the starting position, extending your arms fully.',
    muscleMain: ['Latissimus Dorsi', 'Rhomboids'],
    muscleAdditional: ['Biceps', 'Forearms'],
    image: 'cable-row',
  },
  {
    id: 'preacher-curls-machine',
    name: 'Preacher Curls Machine',
    group: ['Biceps'],
    focusPoints: 'Keep your upper arms stationary and fully isolate the biceps during the movement.',
    startPosition:
      'Sit on the preacher bench, adjusting the seat height so that your upper arms rest comfortably on the pad. Grasp the bar with an underhand grip.',
    process:
      'Curl the bar towards your shoulders, squeezing your biceps at the top. Lower the bar back down slowly to the starting position.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis'],
    image: 'preacher-curls-machine',
  },
  {
    id: 'concentration-curls',
    name: 'Concentration Curls',
    group: ['Biceps'],
    focusPoints: 'Focus on squeezing the biceps throughout the movement. Avoid using momentum or body swing.',
    startPosition:
      'Sit on a bench with your legs apart, holding a dumbbell in one hand. Rest your elbow on the inside of your thigh.',
    process:
      'Curl the dumbbell towards your shoulder, squeezing the biceps at the top. Lower the dumbbell back down with control.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis'],
    image: 'concentration-curls',
  },
  {
    id: 'reversed-incline-bench-barbell-curls',
    name: 'Reversed Incline Bench Barbell Curls',
    group: ['Biceps'],
    focusPoints: 'Use a slow and controlled motion. Keep your upper arms stable and focus on engaging the biceps.',
    startPosition: 'Lie face down on an incline bench, holding a barbell with a shoulder-width, overhand grip.',
    process:
      'Curl the barbell towards your shoulders, squeezing your biceps at the top. Lower the barbell back down slowly.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis'],
    image: 'reversed-incline-bench-barbell-curls',
  },
  {
    id: 'hammer-curls',
    name: 'Hammer Curls',
    group: ['Biceps', 'Forearms'],
    focusPoints:
      'Maintain a neutral grip throughout the exercise. Focus on using your biceps and forearms to lift the weights.',
    startPosition:
      'Stand with feet shoulder-width apart, holding a dumbbell in each hand with a neutral grip (palms facing inwards).',
    process:
      'Curl the dumbbells towards your shoulders, keeping your elbows close to your body. Lower the dumbbells back down with control.',
    muscleMain: ['Biceps Brachii'],
    muscleAdditional: ['Brachialis', 'Brachioradialis'],
    image: 'hammer-curls',
  },
  {
    id: 'hammer-grip-pull-up',
    name: 'Hammer Grip Pull-Up',
    group: ['Back', 'Biceps'],
    focusPoints: 'Maintain a neutral grip throughout the exercise. Engage your core and avoid swinging.',
    startPosition: 'Hang from a pull-up bar with your palms facing each other, shoulder-width apart.',
    process: 'Pull yourself up until your chin is above the bar. Lower yourself down with control.',
    muscleMain: ['Latissimus Dorsi', 'Biceps'],
    muscleAdditional: ['Forearms', 'Core'],
    image: 'hammer-grip-pull-up',
  },
  {
    id: 'flys',
    name: 'Flys',
    group: ['Chest'],
    focusPoints: 'Keep a slight bend in your elbows. Focus on squeezing your chest muscles.',
    startPosition: 'Lie on a flat bench with a dumbbell in each hand, arms extended above your chest.',
    process: 'Lower the dumbbells out to the sides with control, then bring them back together above your chest.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Shoulders', 'Biceps'],
    image: 'flys',
  },
  {
    id: 'incline-barbell-press',
    name: 'Incline Barbell Press',
    group: ['Chest', 'Shoulders'],
    focusPoints:
      'Keep your feet flat on the ground and your back pressed against the bench. Lower the barbell to your upper chest.',
    startPosition:
      'Lie on an incline bench set at a 30-45 degree angle. Grip the barbell with hands slightly wider than shoulder-width apart.',
    process: 'Press the barbell up until your arms are fully extended, then lower it back down with control.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Deltoids'],
    image: 'incline-barbell-press',
  },
  {
    id: 'cable-chest-fly',
    name: 'Cable Chest Fly',
    group: ['Chest'],
    focusPoints:
      'Maintain a slight bend in your elbows. Focus on squeezing the chest muscles as you bring your hands together.',
    startPosition:
      'Stand between two cable machines with handles set at chest height. Grab the handles with palms facing forward.',
    process:
      'Pull the handles together in front of you, keeping your arms slightly bent, then return to the starting position with control.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Shoulders'],
    image: 'cable-chest-fly',
  },
  {
    id: 'incline-cable-fly',
    name: 'Incline Cable Fly',
    group: ['Chest'],
    focusPoints:
      'Maintain a slight bend in your elbows throughout the movement. Use a controlled motion to engage the chest muscles.',
    startPosition:
      'Lie on an incline bench set at a 30-45 degree angle between two cable machines. Grab the handles with a neutral grip.',
    process: 'Bring the handles together above your chest, then slowly lower them back to the starting position.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Shoulders'],
    image: 'incline-cable-fly',
  },
  {
    id: 'chest-press',
    name: 'Chest Press',
    group: ['Chest'],
    focusPoints: 'Keep your back flat against the bench and avoid locking out your elbows at the top of the movement.',
    startPosition:
      'Sit on a chest press machine with your feet flat on the ground. Grasp the handles with an overhand grip.',
    process:
      'Press the handles forward until your arms are fully extended, then return to the starting position with control.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Shoulders'],
    image: 'chest-press',
  },
  {
    id: 'incline-chest-press',
    name: 'Incline Chest Press',
    group: ['Chest', 'Shoulders'],
    focusPoints: 'Maintain a stable position on the bench. Lower the weights to the upper chest area with control.',
    startPosition:
      'Lie on an incline bench set at a 30-45 degree angle. Hold dumbbells with an overhand grip, arms extended.',
    process: 'Lower the dumbbells towards your upper chest, then press them back up to the starting position.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Deltoids'],
    image: 'incline-chest-press',
  },
  {
    id: 'incline-dumbbell-fly',
    name: 'Incline Dumbbell Fly',
    group: ['Chest'],
    focusPoints:
      'Keep a slight bend in your elbows throughout the exercise. Focus on stretching the chest muscles as you lower the weights.',
    startPosition: 'Lie on an incline bench with dumbbells in each hand, palms facing each other.',
    process:
      'Lower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest, then bring them back up above your chest.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Shoulders', 'Biceps'],
    image: 'incline-dumbbell-fly',
  },
  {
    id: 'decline-bench-press',
    name: 'Decline Bench Press',
    group: ['Chest'],
    focusPoints:
      'Ensure your back remains flat against the bench and your feet are securely positioned on the floor. Press the barbell using your chest muscles.',
    startPosition:
      'Lie on a decline bench, with your head lower than your hips. Grasp the barbell with an overhand grip, hands slightly wider than shoulder-width apart.',
    process: 'Lower the barbell towards your lower chest, then press it back up to the starting position.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Deltoids'],
    image: 'decline-bench-press',
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    group: ['Chest', 'Shoulders'],
    focusPoints:
      'Maintain a slight arch in your lower back and keep your feet planted firmly on the ground. Control the movement and avoid locking your elbows.',
    startPosition:
      'Sit on an incline bench, set at about 45 degrees. Hold a dumbbell in each hand at shoulder height, palms facing forward.',
    process:
      'Press the dumbbells up until your arms are fully extended, then slowly lower them back to the starting position.',
    muscleMain: ['Upper Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Anterior Deltoids'],
    image: 'incline-dumbbell-press',
  },
  {
    id: 'decline-dumbbell-bench-press',
    name: 'Decline Dumbbell Bench Press',
    group: ['Chest'],
    focusPoints:
      'Keep your wrists straight and control the weights throughout the movement. Engage your core for stability.',
    startPosition:
      'Lie on a decline bench, holding a dumbbell in each hand with your arms extended above your chest, palms facing forward.',
    process: 'Lower the dumbbells to the sides of your chest, then press them back up to the starting position.',
    muscleMain: ['Lower Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Deltoids'],
    image: 'decline-dumbbell-bench-press',
  },
  {
    id: 'machine-fly',
    name: 'Machine Fly',
    group: ['Chest'],
    focusPoints:
      'Focus on squeezing your chest muscles together at the peak of the movement. Avoid using your arms to move the weights.',
    startPosition:
      'Sit on the machine with your back flat against the pad. Grip the handles with your palms facing each other.',
    process: 'Bring the handles together in front of your chest, then slowly return to the starting position.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Anterior Deltoids'],
    image: 'machine-fly',
  },
  {
    id: 'decline-flys',
    name: 'Decline Flys',
    group: ['Chest'],
    focusPoints:
      'Keep a slight bend in your elbows and control the movement throughout. Avoid overstretching your arms.',
    startPosition:
      'Lie on a decline bench, holding a dumbbell in each hand with arms extended above your chest, palms facing each other.',
    process:
      'Lower the dumbbells in an arc out to the sides of your chest, then bring them back up to the starting position.',
    muscleMain: ['Lower Pectoralis Major'],
    muscleAdditional: ['Anterior Deltoids'],
    image: 'decline-flys',
  },
  {
    id: 'pull-over',
    name: 'Pull Over',
    group: ['Chest', 'Back'],
    focusPoints:
      'Keep your arms slightly bent and avoid using your legs to assist in the lift. Focus on the stretch in your chest and back.',
    startPosition:
      'Lie on a flat bench with your head at one end, holding a dumbbell with both hands above your chest.',
    process: 'Lower the dumbbell behind your head in an arc, then pull it back over to the starting position.',
    muscleMain: ['Pectoralis Major', 'Latissimus Dorsi'],
    muscleAdditional: ['Triceps'],
    image: 'pull-over',
  },
  {
    id: 'dumbbell-bench-press',
    name: 'Dumbbell Bench Press',
    group: ['Chest'],
    focusPoints:
      'Keep your back flat and feet firmly on the ground. Control the dumbbells throughout the lift and avoid bouncing them off your chest.',
    startPosition: 'Lie on a flat bench, holding a dumbbell in each hand at shoulder height with palms facing forward.',
    process:
      'Press the dumbbells upward until your arms are fully extended, then lower them back to the starting position.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Deltoids'],
    image: 'dumbbell-bench-press',
  },
  {
    id: 'resistance-band-chest-press',
    name: 'Resistance Band Chest Press',
    group: ['Chest'],
    focusPoints:
      'Maintain a strong stance and avoid letting the bands snap back too quickly. Focus on a controlled movement throughout the exercise.',
    startPosition:
      'Secure a resistance band behind you at chest height. Hold the handles with your hands at shoulder level.',
    process:
      'Press the handles forward until your arms are fully extended, then return to the starting position with control.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Triceps', 'Deltoids'],
    image: 'resistance-band-chest-press',
  },
  {
    id: 'dumbbell-floor-flys',
    name: 'Dumbbell Floor Flys',
    group: ['Chest'],
    focusPoints:
      'Keep your elbows slightly bent throughout the movement. Focus on squeezing your chest muscles as you bring the dumbbells together.',
    startPosition:
      'Lie on your back on the floor, with knees bent and feet flat. Hold a dumbbell in each hand with arms extended above your chest, palms facing each other.',
    process:
      'Lower the dumbbells to the sides in a controlled arc until your elbows touch the floor. Squeeze your chest to bring the dumbbells back together.',
    muscleMain: ['Pectoralis Major'],
    muscleAdditional: ['Anterior Deltoids'],
    image: 'dumbbell-floor-flys',
  },
  {
    id: 'arnold-press',
    name: 'Arnold Press',
    group: ['Shoulders'],
    focusPoints:
      'Rotate your wrists as you press the dumbbells overhead. Keep your core engaged and avoid arching your back.',
    startPosition:
      'Sit or stand with a dumbbell in each hand, held at shoulder height with palms facing your body and elbows bent.',
    process:
      'Press the dumbbells overhead while rotating your palms to face forward. Lower them back down with control, reversing the rotation.',
    muscleMain: ['Deltoids'],
    muscleAdditional: ['Triceps', 'Upper Chest'],
    image: 'arnold-press',
  },
  {
    id: 'band-reverse-fly',
    name: 'Band Reverse Fly',
    group: ['Back', 'Shoulders'],
    focusPoints:
      'Keep your arms slightly bent and focus on squeezing your shoulder blades together. Avoid shrugging your shoulders.',
    startPosition:
      'Stand with feet hip-width apart, holding a resistance band with both hands at shoulder height, arms extended in front of you.',
    process:
      'Pull the band apart, bringing your hands out to the sides while keeping your arms straight. Squeeze your shoulder blades together, then return to the start.',
    muscleMain: ['Rhomboids', 'Posterior Deltoids'],
    muscleAdditional: ['Trapezius'],
    image: 'band-reverse-fly',
  },
  {
    id: 'front-raise',
    name: 'Front Raise',
    group: ['Shoulders'],
    focusPoints:
      'Raise the weights to shoulder level, keeping a slight bend in your elbows. Do not use momentum; lift in a controlled manner.',
    startPosition:
      'Stand with feet shoulder-width apart, holding a dumbbell in each hand at your sides, palms facing your thighs.',
    process: 'Raise the dumbbells in front of you to shoulder height, then lower them back down with control.',
    muscleMain: ['Anterior Deltoids'],
    muscleAdditional: ['Upper Chest'],
    image: 'front-raise',
  },
  {
    id: 'barbell-front-raise',
    name: 'Barbell Front Raise',
    group: ['Shoulders'],
    focusPoints:
      'Lift the barbell with a smooth motion, keeping your arms straight but not locked. Focus on the anterior deltoids.',
    startPosition:
      'Stand with feet shoulder-width apart, holding a barbell with an overhand grip in front of your thighs.',
    process: 'Raise the barbell to shoulder level, keeping your arms straight. Lower it back down with control.',
    muscleMain: ['Anterior Deltoids'],
    muscleAdditional: ['Upper Chest'],
    image: 'barbell-front-raise',
  },
  {
    id: 'lateral-raise',
    name: 'Lateral Raise',
    group: ['Shoulders'],
    focusPoints:
      'Lift the weights to the sides until they are at shoulder level. Keep a slight bend in your elbows and avoid using momentum.',
    startPosition:
      'Stand with feet hip-width apart, holding a dumbbell in each hand at your sides, palms facing your body.',
    process:
      'Raise the dumbbells out to the sides until your arms are parallel to the floor. Lower them back down with control.',
    muscleMain: ['Lateral Deltoids'],
    muscleAdditional: ['Trapezius'],
    image: 'lateral-raise',
  },
  {
    id: 'barbell-row',
    name: 'Barbell Row',
    group: ['Back'],
    focusPoints:
      'Keep your back straight and hinge at the hips. Use your back muscles to pull the barbell towards your lower chest.',
    startPosition:
      'Stand with feet shoulder-width apart, knees slightly bent, and lean forward at the hips, holding the barbell with an overhand grip.',
    process:
      'Pull the barbell towards your lower chest, squeezing your shoulder blades together. Lower the barbell back down with control.',
    muscleMain: ['Latissimus Dorsi', 'Rhomboids'],
    muscleAdditional: ['Biceps'],
    image: 'barbell-row',
  },
  {
    id: 'behind-the-neck-overhead-press',
    name: 'Behind-the-Neck Overhead Press',
    group: ['Shoulders', 'Triceps'],
    focusPoints:
      'Maintain a neutral spine and avoid leaning backward. Use a controlled motion to press the barbell overhead.',
    startPosition:
      'Stand with feet shoulder-width apart, holding the barbell behind your head at shoulder level with an overhand grip.',
    process:
      'Press the barbell overhead, extending your arms fully. Slowly lower the bar back to the starting position behind your head.',
    muscleMain: ['Deltoids', 'Trapezius'],
    muscleAdditional: ['Triceps'],
    image: 'behind-the-neck-overhead-press',
  },
  {
    id: 'resistance-band-upright-row',
    name: 'Resistance Band Upright Row',
    group: ['Shoulders', 'Neck'],
    focusPoints: 'Keep your shoulders relaxed and pull with your arms, not your back. Avoid jerking the band upwards.',
    startPosition:
      'Stand with feet shoulder-width apart, holding the resistance band with both hands in front of your thighs.',
    process:
      'Pull the band up towards your chin, leading with your elbows and keeping your hands close to your body. Lower back down with control.',
    muscleMain: ['Deltoids', 'Trapezius'],
    muscleAdditional: ['Biceps'],
    image: 'resistance-band-upright-row',
  },
  {
    id: 'reverse-butterfly',
    name: 'Reverse Butterfly',
    group: ['Shoulders', 'Back'],
    focusPoints: 'Keep your core tight and back straight. Focus on squeezing your shoulder blades together.',
    startPosition: 'Sit on a bench with feet flat on the ground, holding dumbbells with arms extended downwards.',
    process:
      'Raise the dumbbells out to the sides, squeezing your shoulder blades together. Slowly return to the starting position.',
    muscleMain: ['Rear Deltoids', 'Rhomboids'],
    muscleAdditional: ['Trapezius'],
    image: 'reverse-butterfly',
  },
  {
    id: 'dumbbell-shoulder-press',
    name: 'Dumbbell Shoulder Press',
    group: ['Shoulders', 'Triceps'],
    focusPoints: 'Avoid arching your lower back. Press the dumbbells straight up and lower them with control.',
    startPosition: 'Sit on a bench with back support, holding dumbbells at shoulder level with palms facing forward.',
    process:
      'Press the dumbbells overhead until your arms are fully extended. Lower the dumbbells back to the starting position.',
    muscleMain: ['Deltoids', 'Triceps'],
    muscleAdditional: ['Trapezius'],
    image: 'dumbbell-shoulder-press',
  },
];

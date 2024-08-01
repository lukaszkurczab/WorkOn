export const muscleGroupsList = [
  'ABS',
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

export const newExercisesList = [
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
    id: 'step-ups-sideways-with-dumbbells',
    name: 'Step-Ups Sideways with Dumbbells',
    group: ['Butt', 'Thighs'],
    focusPoints:
      'Keep your torso upright and core engaged. Step onto the platform with control and avoid pushing off with the trailing leg.',
    startPosition: 'Stand next to a platform or bench with feet hip-width apart, holding dumbbells at your sides.',
    process:
      'Step up sideways onto the platform with one leg, pushing through your heel to lift your body. Step back down and repeat on the other side.',
    muscleMain: ['Glutes', 'Quadriceps'],
    muscleAdditional: ['Hamstrings', 'Calves'],
    image: 'step-ups-sideways-with-dumbbells',
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

export const exercisesList = [
  {
    id: 'back',
    name: 'Back',
    exercises: [
      {
        id: '1',
        name: 'Deadlift',
        group: 'Back',
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
        id: '2',
        name: 'Bent Over Row',
        group: 'Back',
        focusPoints:
          'Keep back straight, pull elbows back, squeeze shoulder blades. Avoid rounding your back to prevent strain and focus on a smooth rowing motion.',
        startPosition:
          'Stand with feet hip-width apart, bend at hips, grip barbell with hands shoulder-width apart. Keep your knees slightly bent and back straight.',
        process:
          'Pull barbell to lower chest, squeeze shoulder blades together at the top of the movement. Lower the barbell back to the start position in a controlled manner, avoiding jerky movements.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Biceps', 'Core'],
        image: 'bent-over-row',
      },
      {
        id: '3',
        name: 'Pull-Up',
        group: 'Back',
        focusPoints:
          'Engage lats, avoid swinging, pull chin above bar. Focus on a controlled ascent and descent to maximize muscle engagement.',
        startPosition:
          'Hang from bar with hands shoulder-width apart, palms facing away. Engage your core to keep your body steady.',
        process:
          'Pull your body up until your chin is above the bar, leading with your chest. Lower your body back to the start position in a controlled manner, fully extending your arms at the bottom.',
        muscleMain: ['Lats', 'Upper Back'],
        muscleAdditional: ['Biceps', 'Core'],
        image: 'pull-up',
      },
      {
        id: '4',
        name: 'Lateral Pulldown',
        group: 'Back',
        focusPoints:
          'Engage lats, avoid leaning back excessively, pull bar to chest. Focus on smooth, controlled movements to maximize muscle engagement.',
        startPosition:
          'Sit at lat pulldown machine, grip bar wider than shoulder-width. Ensure your feet are flat on the floor and your torso remains upright.',
        process:
          'Pull the bar to your upper chest, squeezing your shoulder blades together. Slowly return the bar to the starting position, fully extending your arms.',
        muscleMain: ['Lats'],
        muscleAdditional: ['Upper Back', 'Biceps'],
        image: 'lat-pulldown',
      },
      {
        id: '6',
        name: 'Seated Row',
        group: 'Back',
        focusPoints:
          'Keep back straight, pull elbows back, squeeze shoulder blades. Ensure you are not leaning back excessively to keep tension on the muscles.',
        startPosition:
          'Sit at row machine, grip handles with a neutral grip. Keep your feet flat on the platform and your back straight.',
        process:
          'Pull the handles to your torso, squeezing your shoulder blades together. Slowly return to the start position, maintaining control.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Biceps', 'Core'],
        image: 'seated-row',
      },
      {
        id: '7',
        name: 'Single-Arm Dumbbell Row',
        group: 'Back',
        focusPoints:
          'Keep back straight, pull elbow back, squeeze shoulder blade. Avoid twisting your torso during the movement.',
        startPosition:
          'Place one knee and hand on bench, grip dumbbell with other hand. Keep your back straight and your core engaged.',
        process:
          'Pull the dumbbell to your lower chest, squeezing your shoulder blade. Lower the dumbbell back to the start position in a controlled manner.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Biceps', 'Core'],
        image: 'single-arm-dumbbell-row',
      },
      {
        id: '8',
        name: 'Inverted Row',
        group: 'Back',
        focusPoints:
          'Engage core, keep body straight, pull chest to bar. Ensure your body moves as a unit without sagging or arching.',
        startPosition:
          'Hang from bar with hands shoulder-width apart, body straight. Place your heels on the ground with your legs extended.',
        process:
          'Pull your chest to the bar, squeezing your shoulder blades. Lower your body back to the start position in a controlled manner.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Biceps', 'Core'],
        image: 'inverted-row',
      },
      {
        id: '9',
        name: 'Good Morning',
        group: 'Back',
        focusPoints: 'Keep back straight, hinge at hips, engage core. Avoid rounding your back to prevent strain.',
        startPosition:
          'Stand with feet shoulder-width apart, barbell on shoulders. Keep your knees slightly bent and your core engaged.',
        process:
          'Bend at the hips, lowering your torso until parallel to the floor. Return to the start position by extending your hips.',
        muscleMain: ['Lower Back', 'Hamstrings'],
        muscleAdditional: ['Glutes', 'Core'],
        image: 'good-morning',
      },
      {
        id: '10',
        name: 'Back Extension',
        group: 'Back',
        focusPoints:
          'Engage lower back, avoid hyperextension, control movement. Focus on a smooth, controlled lift to maximize muscle engagement.',
        startPosition:
          'Lie face down on back extension machine, feet secured. Keep your back straight and your core engaged.',
        process:
          'Lift your torso until in line with your legs, squeezing your glutes. Lower back to the start position in a controlled manner.',
        muscleMain: ['Lower Back'],
        muscleAdditional: ['Glutes', 'Hamstrings'],
        image: 'back-extension',
      },
      {
        id: '12',
        name: 'Superman',
        group: 'Back',
        focusPoints:
          'Engage core and glutes, lift arms and legs simultaneously, avoid arching back excessively. Focus on controlled movements to avoid injury.',
        startPosition:
          'Lie face down on the floor, arms extended overhead. Keep your legs straight and your toes pointed.',
        process:
          'Lift your arms, chest, and legs off the ground simultaneously. Hold briefly at the top, then lower back to the start position.',
        muscleMain: ['Lower Back'],
        muscleAdditional: ['Glutes', 'Hamstrings'],
        image: 'superman',
      },
      {
        id: '13',
        name: 'Reverse Fly',
        group: 'Back',
        focusPoints:
          'Keep back straight, lift arms to shoulder height, squeeze shoulder blades. Avoid using momentum to lift the weights.',
        startPosition:
          'Stand with feet hip-width apart, bend at hips, hold dumbbells with neutral grip. Keep your back straight and your core engaged.',
        process:
          'Lift your arms to the side until in line with your shoulders. Slowly return to the start position in a controlled manner.',
        muscleMain: ['Upper Back', 'Rear Delts'],
        muscleAdditional: ['Traps', 'Rhomboids'],
        image: 'reverse-fly',
      },
      {
        id: '14',
        name: 'Kettlebell Swing',
        group: 'Back',
        focusPoints:
          'Engage core, hinge at hips, swing kettlebell to shoulder height. Focus on using your hips to generate momentum.',
        startPosition:
          'Stand with feet shoulder-width apart, grip kettlebell with both hands. Keep your knees slightly bent and your back straight.',
        process:
          'Swing the kettlebell between your legs, then thrust your hips forward to swing the kettlebell up to shoulder height. Control the descent and repeat.',
        muscleMain: ['Lower Back', 'Glutes'],
        muscleAdditional: ['Hamstrings', 'Core'],
        image: 'kettlebell-swing',
      },
      {
        id: '15',
        name: 'Landmine Row',
        group: 'Back',
        focusPoints:
          'Keep back straight, pull bar to chest, squeeze shoulder blades. Avoid using momentum; focus on muscle contraction.',
        startPosition:
          'Stand over landmine bar, grip barbell with both hands. Keep your knees slightly bent and back straight.',
        process:
          'Pull the barbell to your chest, squeezing your shoulder blades together at the top. Lower the barbell back to the start position in a controlled manner.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Biceps', 'Core'],
        image: 'landmine-row',
      },
      {
        id: '200',
        name: 'Bent Over Dumbbell Row',
        group: 'Back',
        focusPoints:
          'Keep your back straight, pull both elbows back, squeeze your shoulder blades together. Avoid rounding your back or using momentum to lift the weights.',
        startPosition:
          'Stand with feet shoulder-width apart, bend your knees slightly, and hinge at the hips so your torso is nearly parallel to the floor. Hold a dumbbell in each hand with arms extended downwards.',
        process:
          'Pull both dumbbells towards your lower chest, squeezing your shoulder blades together. Lower the dumbbells back to the start position in a controlled manner.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Biceps', 'Core'],
        image: 'bent-over-two-arm-dumbbell-row',
      },
    ],
  },
  {
    id: 'triceps',
    name: 'Triceps',
    exercises: [
      {
        id: '16',
        name: 'Tricep Dip',
        group: 'Triceps',
        focusPoints:
          'Keep elbows close to body, avoid shrugging shoulders. Focus on full range of motion to maximize tricep engagement.',
        startPosition: 'Position yourself on dip bars with arms fully extended, legs straight or bent slightly.',
        process:
          'Lower your body until your upper arms are parallel to the ground, then press back up to the starting position by extending your elbows.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Chest', 'Shoulders'],
        image: 'tricep-dip',
      },
      {
        id: '17',
        name: 'Tricep Pushdown',
        group: 'Triceps',
        focusPoints:
          'Keep elbows tight to sides, fully extend arms at bottom. Focus on controlled movements to engage triceps fully.',
        startPosition: 'Stand facing a cable machine, grip the bar with palms facing down.',
        process: 'Push the bar down until your arms are fully extended, then slowly return to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Shoulders'],
        image: 'tricep-pushdown',
      },
      {
        id: '18',
        name: 'Skull Crusher',
        group: 'Triceps',
        focusPoints:
          'Keep elbows stationary, lower bar to forehead. Focus on controlled movement to avoid elbow strain.',
        startPosition: 'Lie on a bench, hold a barbell with arms extended above chest.',
        process:
          'Lower the barbell towards your forehead by bending your elbows, then extend your arms to return to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Forearms'],
        image: 'skull-crusher',
      },
      {
        id: '19',
        name: 'Close-Grip Bench Press',
        group: 'Triceps',
        focusPoints:
          'Keep elbows close to body, press bar up using triceps. Avoid flaring elbows to prevent shoulder strain.',
        startPosition: 'Lie on a bench, grip the barbell with hands shoulder-width apart.',
        process: 'Lower the barbell to your chest, then press it back up by extending your elbows.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Chest', 'Shoulders'],
        image: 'close-grip-bench-press',
      },
      {
        id: '20',
        name: 'Overhead Tricep Extension',
        group: 'Triceps',
        focusPoints:
          'Keep elbows close to ears, fully extend arms at the top. Focus on controlled movements to engage triceps.',
        startPosition: 'Stand or sit holding a dumbbell with both hands above your head.',
        process:
          'Lower the dumbbell behind your head by bending your elbows, then extend your arms to return to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Shoulders'],
        image: 'overhead-tricep-extension',
      },
      {
        id: '21',
        name: 'Tricep Kickback',
        group: 'Triceps',
        focusPoints:
          'Keep upper arm stationary, extend forearm fully. Focus on squeezing triceps at the top of the movement.',
        startPosition: 'Bend over at the waist with a dumbbell in one hand, upper arm parallel to the ground.',
        process: 'Extend your forearm back until your arm is fully extended, then return to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Shoulders'],
        image: 'tricep-kickback',
      },
      {
        id: '22',
        name: 'Diamond Push-Up',
        group: 'Triceps',
        focusPoints:
          'Keep hands close together, form a diamond shape with thumbs and index fingers. Focus on keeping elbows close to the body.',
        startPosition: 'Get into a push-up position with your hands close together under your chest.',
        process:
          'Lower your body until your chest nearly touches your hands, then push back up to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Chest', 'Shoulders'],
        image: 'diamond-push-up',
      },
      {
        id: '23',
        name: 'Tricep Extension',
        group: 'Triceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage triceps.',
        startPosition: 'Sit on a bench or stand, hold a dumbbell or barbell with both hands above your head.',
        process:
          'Lower the weight behind your head by bending your elbows, then extend your arms to return to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Shoulders'],
        image: 'tricep-extension',
      },
      {
        id: '24',
        name: 'Bench Dip',
        group: 'Triceps',
        focusPoints:
          'Keep elbows close to body, lower body until arms are at 90 degrees. Focus on pressing through palms to return to start position.',
        startPosition: 'Sit on the edge of a bench, hands next to hips, legs extended forward.',
        process:
          'Lower your body by bending your elbows, then press back up to the starting position by extending your elbows.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Chest', 'Shoulders'],
        image: 'bench-dip',
      },
      {
        id: '25',
        name: 'Rope Tricep Pushdown',
        group: 'Triceps',
        focusPoints:
          'Keep elbows tight to sides, fully extend arms at bottom. Focus on controlled movements to engage triceps fully.',
        startPosition: 'Stand facing a cable machine, grip the rope attachment with both hands.',
        process: 'Push the rope down until your arms are fully extended, then slowly return to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Shoulders'],
        image: 'rope-tricep-pushdown',
      },
      {
        id: '26',
        name: 'Dumbbell Tricep Press',
        group: 'Triceps',
        focusPoints:
          'Keep elbows close to ears, fully extend arms at the top. Focus on controlled movements to engage triceps.',
        startPosition: 'Sit or stand holding a dumbbell with both hands above your head.',
        process:
          'Lower the dumbbell behind your head by bending your elbows, then extend your arms to return to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Shoulders'],
        image: 'dumbbell-tricep-press',
      },
      {
        id: '27',
        name: 'Lying Tricep Extension',
        group: 'Triceps',
        focusPoints:
          'Keep elbows stationary, lower bar to forehead. Focus on controlled movement to avoid elbow strain.',
        startPosition: 'Lie on a bench, hold a barbell with arms extended above chest.',
        process:
          'Lower the barbell towards your forehead by bending your elbows, then extend your arms to return to the starting position.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Forearms'],
        image: 'lying-tricep-extension',
      },
      {
        id: '28',
        name: 'Parallel Bar Dip',
        group: 'Triceps',
        focusPoints:
          'Keep elbows close to body, avoid swinging. Focus on pressing through palms to return to start position.',
        startPosition: 'Position yourself on parallel bars with arms fully extended, legs straight or bent slightly.',
        process:
          'Lower your body until your upper arms are parallel to the ground, then press back up to the starting position by extending your elbows.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Chest', 'Shoulders'],
        image: 'parallel-bar-dip',
      },
      {
        id: '29',
        name: 'Resistance Band Tricep Extension',
        group: 'Triceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage triceps.',
        startPosition:
          'Stand with feet shoulder-width apart, hold resistance band handles with both hands above your head.',
        process: 'Extend your arms to stretch the band, then return to the starting position by bending your elbows.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Shoulders'],
        image: 'resistance-band-tricep-extension',
      },
      {
        id: '30',
        name: 'Floor Press',
        group: 'Triceps',
        focusPoints:
          'Keep elbows close to body, press bar up using triceps. Avoid flaring elbows to prevent shoulder strain.',
        startPosition: 'Lie on the floor, grip the barbell with hands shoulder-width apart.',
        process: 'Lower the barbell to your chest, then press it back up by extending your elbows.',
        muscleMain: ['Triceps'],
        muscleAdditional: ['Chest', 'Shoulders'],
        image: 'floor-press',
      },
    ],
  },
  {
    id: 'biceps',
    name: 'Biceps',
    exercises: [
      {
        id: '31',
        name: 'Barbell Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell with an underhand grip.',
        process:
          'Curl the barbell towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'barbell-curl',
      },
      {
        id: '32',
        name: 'Dumbbell Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell in each hand with an underhand grip.',
        process:
          'Curl the dumbbells towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'dumbbell-curl',
      },
      {
        id: '33',
        name: 'Hammer Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell in each hand with a neutral grip.',
        process:
          'Curl the dumbbells towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'hammer-curl',
      },
      {
        id: '34',
        name: 'Preacher Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Sit on a preacher bench, hold a barbell with an underhand grip.',
        process:
          'Curl the barbell towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'preacher-curl',
      },
      {
        id: '209',
        name: 'One-Hand Preacher Curl',
        group: 'Arms',
        focusPoints:
          'Keep your wrist straight and avoid using momentum. Focus on contracting the biceps throughout the movement.',
        startPosition:
          'Sit at a preacher bench with your upper arm resting on the pad, hold a dumbbell in your hand with an underhand (supinated) grip.',
        process:
          'Curl the dumbbell towards your shoulder by bending your elbow, keeping your upper arm stationary on the pad. Squeeze your biceps at the top of the movement, then slowly lower the dumbbell back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Brachialis', 'Forearms'],
        image: 'one-hand-preacher-curl',
      },
      {
        id: '35',
        name: 'Concentration Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbow stationary, fully extend arm at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Sit on a bench, hold a dumbbell in one hand, rest your elbow on the inside of your thigh.',
        process:
          'Curl the dumbbell towards your shoulder by bending your elbow, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'concentration-curl',
      },
      {
        id: '36',
        name: 'Cable Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Stand facing a cable machine, hold the bar with an underhand grip.',
        process:
          'Curl the bar towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'cable-curl',
      },
      {
        id: '37',
        name: 'Chin-Up',
        group: 'Biceps',
        focusPoints:
          'Engage lats, avoid swinging, pull chin above bar. Focus on controlled ascent and descent to maximize muscle engagement.',
        startPosition: 'Hang from bar with hands shoulder-width apart, palms facing you.',
        process:
          'Pull your body up until your chin is above the bar, then lower your body back to the start position in a controlled manner.',
        muscleMain: ['Biceps', 'Lats'],
        muscleAdditional: ['Upper Back', 'Core'],
        image: 'chin-up',
      },
      {
        id: '38',
        name: 'Spider Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on squeezing biceps at the top of the movement.',
        startPosition: 'Lie face down on an incline bench, hold a dumbbell in each hand with an underhand grip.',
        process:
          'Curl the dumbbells towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'spider-curl',
      },
      {
        id: '39',
        name: 'Incline Dumbbell Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Sit on an incline bench, hold a dumbbell in each hand with an underhand grip.',
        process:
          'Curl the dumbbells towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'incline-dumbbell-curl',
      },
      {
        id: '41',
        name: 'EZ Bar Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Stand with feet shoulder-width apart, hold an EZ bar with an underhand grip.',
        process:
          'Curl the bar towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'ez-bar-curl',
      },
      {
        id: '42',
        name: 'Resistance Band Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Stand with feet shoulder-width apart, hold resistance band handles with an underhand grip.',
        process:
          'Curl the handles towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'resistance-band-curl',
      },
      {
        id: '44',
        name: 'Seated Dumbbell Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Sit on a bench, hold a dumbbell in each hand with an underhand grip.',
        process:
          'Curl the dumbbells towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'seated-dumbbell-curl',
      },
      {
        id: '45',
        name: 'Machine Bicep Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Sit at a bicep curl machine, grip the handles with an underhand grip.',
        process:
          'Curl the handles towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'machine-bicep-curl',
      },
    ],
  },
  {
    id: 'forearms',
    name: 'Forearms',
    exercises: [
      {
        id: '46',
        name: 'Wrist Curl',
        group: 'Forearms',
        focusPoints: 'Keep forearms stationary, flex wrists upwards. Focus on controlled movements to engage forearms.',
        startPosition: 'Sit on a bench, forearms resting on your thighs, hold a barbell with an underhand grip.',
        process: 'Curl the barbell up by flexing your wrists, then lower back to the starting position.',
        muscleMain: ['Forearms'],
        muscleAdditional: ['Wrist Flexors'],
        image: 'wrist-curl',
      },
      {
        id: '47',
        name: 'Reverse Wrist Curl',
        group: 'Forearms',
        focusPoints:
          'Keep forearms stationary, extend wrists upwards. Focus on controlled movements to engage forearms.',
        startPosition: 'Sit on a bench, forearms resting on your thighs, hold a barbell with an overhand grip.',
        process: 'Extend the barbell up by flexing your wrists, then lower back to the starting position.',
        muscleMain: ['Forearms'],
        muscleAdditional: ['Wrist Extensors'],
        image: 'reverse-wrist-curl',
      },
      {
        id: '49',
        name: 'Wrist Roller',
        group: 'Forearms',
        focusPoints:
          'Keep forearms stationary, use wrist motion to roll the weight up and down. Focus on controlled movements to engage forearms.',
        startPosition: 'Stand or sit, hold the wrist roller with both hands, arms extended in front of you.',
        process: 'Roll the weight up by flexing and extending your wrists, then slowly roll it back down.',
        muscleMain: ['Forearms'],
        muscleAdditional: [''],
        image: 'wrist-roller',
      },
      {
        id: '50',
        name: 'Hammer Curl',
        group: 'Forearms',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage both biceps and forearms.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell in each hand with a neutral grip.',
        process:
          'Curl the dumbbells towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'hammer-curl',
      },
      {
        id: '51',
        name: 'Towel Pull-Up',
        group: 'Forearms',
        focusPoints:
          'Engage forearms and grip strength, pull chin above the bar. Focus on controlled ascent and descent.',
        startPosition: 'Hang two towels over a pull-up bar, grip each towel with one hand.',
        process:
          'Pull your body up until your chin is above the bar, then lower your body back to the start position in a controlled manner.',
        muscleMain: ['Forearms', 'Biceps'],
        muscleAdditional: ['Upper Back', 'Core'],
        image: 'towel-pull-up',
      },
      {
        id: '52',
        name: 'Plate Pinch',
        group: 'Forearms',
        focusPoints:
          'Engage grip strength, hold plates for a set time. Focus on maintaining grip without letting plates slip.',
        startPosition:
          'Stand with feet shoulder-width apart, hold two weight plates together with your fingers and thumb.',
        process: 'Hold the plates for a set duration, then release and repeat.',
        muscleMain: ['Forearms'],
        muscleAdditional: [''],
        image: 'plate-pinch',
      },
      {
        id: '53',
        name: 'Zottman Curl',
        group: 'Forearms',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on rotating wrists at the top and bottom of the movement.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell in each hand with an underhand grip.',
        process:
          'Curl the dumbbells towards your shoulders by bending your elbows, rotate wrists at the top to a pronated grip, lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'zottman-curl',
      },
      {
        id: '54',
        name: 'Reverse Curl',
        group: 'Forearms',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps and forearms.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell with an overhand grip.',
        process:
          'Curl the barbell towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'reverse-curl',
      },
      {
        id: '55',
        name: 'Dead Hang',
        group: 'Forearms',
        focusPoints: 'Engage grip strength, hang with steady arms. Focus on holding the position for a set duration.',
        startPosition: 'Hang from a pull-up bar with hands shoulder-width apart, palms facing away.',
        process: 'Hold the position for a set duration, then release and repeat.',
        muscleMain: ['Forearms'],
        muscleAdditional: [''],
        image: 'dead-hang',
      },
      {
        id: '56',
        name: 'Grip Squeeze',
        group: 'Forearms',
        focusPoints: 'Engage grip strength, squeeze grippers tightly. Focus on holding the squeeze for a set duration.',
        startPosition: 'Hold a hand gripper in one hand, arm extended at your side.',
        process: 'Squeeze the gripper tightly, hold for a set duration, then release and repeat.',
        muscleMain: ['Forearms'],
        muscleAdditional: [''],
        image: 'grip-squeeze',
      },
      {
        id: '57',
        name: 'Cable Wrist Curl',
        group: 'Forearms',
        focusPoints: 'Keep forearms stationary, flex wrists upwards. Focus on controlled movements to engage forearms.',
        startPosition: 'Sit or stand facing a cable machine, hold the bar with an underhand grip.',
        process: 'Curl the bar up by flexing your wrists, then lower back to the starting position.',
        muscleMain: ['Forearms'],
        muscleAdditional: ['Wrist Flexors'],
        image: 'cable-wrist-curl',
      },
      {
        id: '58',
        name: 'Rope Climbing',
        group: 'Forearms',
        focusPoints: 'Engage forearms and grip strength, climb using only your arms. Focus on controlled movements.',
        startPosition: 'Stand beneath a rope, grip the rope with both hands.',
        process: 'Climb the rope using your arms and legs, then descend in a controlled manner.',
        muscleMain: ['Forearms', 'Biceps'],
        muscleAdditional: ['Upper Back', 'Core'],
        image: 'rope-climbing',
      },
      {
        id: '59',
        name: 'Barbell Rollout',
        group: 'Forearms',
        focusPoints:
          'Engage core, roll barbell out and back in a controlled manner. Focus on maintaining a straight line from head to hips.',
        startPosition: 'Kneel on the floor, hold a barbell with an overhand grip, arms extended in front of you.',
        process:
          'Roll the barbell forward, extending your body into a plank position, then roll back to the starting position.',
        muscleMain: ['Core'],
        muscleAdditional: ['Forearms', 'Shoulders'],
        image: 'barbell-rollout',
      },
      {
        id: '60',
        name: 'Finger Curl',
        group: 'Forearms',
        focusPoints:
          'Keep forearms stationary, flex fingers to curl the weight. Focus on controlled movements to engage forearms.',
        startPosition: 'Sit on a bench, forearms resting on your thighs, hold a barbell with an underhand grip.',
        process: 'Curl the barbell up by flexing your fingers, then lower back to the starting position.',
        muscleMain: ['Forearms'],
        muscleAdditional: ['Finger Flexors'],
        image: 'finger-curl',
      },
      {
        id: '207',
        name: 'Reverse Grip Preacher Curl',
        group: 'Forearms',
        focusPoints:
          'Keep your wrists straight and avoid using momentum. Focus on engaging your forearm muscles throughout the movement.',
        startPosition:
          'Sit at a preacher bench with your upper arms resting on the pad, hold a barbell with an overhand (pronated) grip and your hands shoulder-width apart.',
        process:
          'Curl the barbell towards your shoulders by bending your elbows, keeping your upper arms stationary. Squeeze your forearm muscles at the top of the movement, then slowly lower the barbell back to the starting position.',
        muscleMain: ['Brachioradialis'],
        muscleAdditional: ['Biceps', 'Brachialis'],
        image: 'reverse-grip-preacher-curl',
      },
    ],
  },
  {
    id: 'chest',
    name: 'Chest',
    exercises: [
      {
        id: '61',
        name: 'Bench Press',
        group: 'Chest',
        focusPoints:
          'Engage chest muscles, avoid excessive straightening and locking of the arms. Focus on a controlled descent and powerful ascent.',
        startPosition:
          'Lie back on a bench, grip the barbell with hands slightly wider than shoulder-width apart, feet flat on the ground.',
        process:
          'Lower the barbell to your chest by bending your elbows, then press the bar back up to the starting position by extending your arms.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Triceps', 'Shoulders'],
        image: 'bench-press',
      },
      {
        id: '62',
        name: 'Dumbbell Fly',
        group: 'Chest',
        focusPoints:
          'Keep a slight bend in elbows, lower dumbbells until you feel a stretch in your chest. Focus on a controlled movement and squeezing your chest at the top.',
        startPosition:
          'Lie back on a bench, hold a dumbbell in each hand above your chest with a slight bend in your elbows.',
        process:
          'Lower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest, then bring them back up to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Shoulders'],
        image: 'dumbbell-fly',
      },
      {
        id: '63',
        name: 'Push-Up',
        group: 'Chest',
        focusPoints:
          'Keep body in a straight line, lower chest to the ground. Focus on engaging chest muscles and maintaining proper form.',
        startPosition: 'Get into a plank position with your hands shoulder-width apart, arms extended.',
        process:
          'Lower your body until your chest nearly touches the ground, then push back up to the starting position by extending your arms.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Triceps', 'Shoulders', 'Core'],
        image: 'push-up',
      },
      {
        id: '64',
        name: 'Incline Bench Press',
        group: 'Chest',
        focusPoints:
          'Avoid excessive straightening and locking of the arms. Forearms should be vertical at the bottom position, targeting the upper chest.',
        startPosition:
          'Lie back on a bench set to an incline (15-30 degrees), grip the barbell with hands slightly wider than shoulder-width apart.',
        process:
          'Lower the barbell to your chest by bending your elbows, then press the bar back up to the starting position.',
        muscleMain: ['Upper Chest'],
        muscleAdditional: ['Triceps', 'Shoulders'],
        image: 'incline-bench-press',
      },
      {
        id: '65',
        name: 'Chest Dip',
        group: 'Chest',
        focusPoints: 'Lean forward to engage the chest, keep elbows slightly flared. Avoid locking elbows at the top.',
        startPosition: 'Position yourself on dip bars with arms fully extended, feet crossed behind you.',
        process:
          'Lower your body until your upper arms are parallel to the ground, then press back up to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Triceps', 'Shoulders'],
        image: 'chest-dip',
      },
      {
        id: '66',
        name: 'Cable Crossover',
        group: 'Chest',
        focusPoints:
          'Keep a slight bend in elbows, bring handles together in front of chest. Focus on squeezing the chest at the peak contraction.',
        startPosition:
          'Stand in the center of a cable machine, hold a handle in each hand with cables set to high position.',
        process: 'Pull the handles together in front of your chest, then slowly return to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Shoulders'],
        image: 'cable-crossover',
      },
      {
        id: '67',
        name: 'Chest Press',
        group: 'Chest',
        focusPoints:
          'Keep elbows at a 90-degree angle, avoid locking elbows at the top. Focus on engaging the chest throughout the movement.',
        startPosition: 'Sit on a chest press machine, grip the handles with hands at chest level.',
        process: 'Press the handles forward until your arms are fully extended, then return to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Triceps', 'Shoulders'],
        image: 'chest-press',
      },
      {
        id: '68',
        name: 'Pec Deck',
        group: 'Chest',
        focusPoints:
          'Keep a slight bend in elbows, bring pads together in front of chest. Focus on squeezing the chest at the peak contraction.',
        startPosition: 'Sit on a pec deck machine, place forearms against the pads with elbows at shoulder height.',
        process: 'Bring the pads together in front of your chest, then slowly return to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Shoulders'],
        image: 'pec-deck',
      },
      {
        id: '69',
        name: 'Decline Bench Press',
        group: 'Chest',
        focusPoints:
          'Avoid excessive straightening and locking of the arms. Forearms should be vertical at the bottom position, targeting the lower chest.',
        startPosition:
          'Lie back on a bench set to a decline, grip the barbell with hands slightly wider than shoulder-width apart.',
        process:
          'Lower the barbell to your chest by bending your elbows, then press the bar back up to the starting position.',
        muscleMain: ['Lower Chest'],
        muscleAdditional: ['Triceps', 'Shoulders'],
        image: 'decline-bench-press',
      },
      {
        id: '70',
        name: 'Svend Press',
        group: 'Chest',
        focusPoints:
          'Keep plates squeezed together, extend arms in front of chest. Focus on constant tension in the chest.',
        startPosition: 'Stand with feet shoulder-width apart, hold two plates together at chest level.',
        process: 'Extend your arms straight out in front of you, then return to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Shoulders'],
        image: 'svend-press',
      },
      {
        id: '71',
        name: 'Resistance Band Chest Press',
        group: 'Chest',
        focusPoints:
          'Keep elbows at a 90-degree angle, avoid locking elbows at the top. Focus on engaging the chest throughout the movement.',
        startPosition: 'Stand with feet shoulder-width apart, hold resistance band handles with hands at chest level.',
        process: 'Press the handles forward until your arms are fully extended, then return to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Triceps', 'Shoulders'],
        image: 'resistance-band-chest-press',
      },
      {
        id: '72',
        name: 'Plyometric Push-Up',
        group: 'Chest',
        focusPoints: 'Explode off the ground, land softly. Focus on engaging the chest and maintaining proper form.',
        startPosition: 'Get into a push-up position with hands shoulder-width apart, arms extended.',
        process:
          'Lower your body until your chest nearly touches the ground, then explosively push off the ground so your hands leave the floor.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Triceps', 'Shoulders', 'Core'],
        image: 'plyometric-push-up',
      },
      {
        id: '73',
        name: 'Landmine Press',
        group: 'Chest',
        focusPoints: 'Keep elbows close to body, press the bar up using chest. Focus on controlled movements.',
        startPosition: 'Stand with feet shoulder-width apart, hold the end of a barbell in both hands at chest level.',
        process: 'Press the barbell up and forward, then return to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Shoulders', 'Triceps'],
        image: 'landmine-press',
      },
      {
        id: '74',
        name: 'Dumbbell Pullover',
        group: 'Chest',
        focusPoints:
          'Keep a slight bend in elbows, lower the dumbbell behind your head. Focus on engaging the chest throughout the movement.',
        startPosition: 'Lie back on a bench, hold a dumbbell with both hands above your chest.',
        process: 'Lower the dumbbell behind your head in an arc, then bring it back to the starting position.',
        muscleMain: ['Chest'],
        muscleAdditional: ['Lats', 'Triceps'],
        image: 'dumbbell-pullover',
      },
      {
        id: '201',
        name: 'Machine Fly',
        group: 'Chest',
        focusPoints:
          'Keep your back flat against the pad, avoid locking elbows. Focus on bringing the handles together in a controlled manner.',
        startPosition:
          'Sit on the machine with feet flat on the floor, grip the handles with arms slightly bent and positioned at shoulder level.',
        process:
          'Bring the handles together in front of your chest, squeezing your chest muscles. Slowly return to the start position in a controlled manner.',
        muscleMain: ['Pectorals'],
        muscleAdditional: ['Front Deltoids'],
        image: 'machine-fly',
      },
      {
        id: '206',
        name: 'Incline Dumbbell Press',
        group: 'Chest',
        focusPoints:
          'Keep your back pressed against the bench and avoid arching. Focus on pressing the weights directly upwards in a controlled manner.',
        startPosition:
          'Lie back on an incline bench set at a 30-45 degree angle, hold a dumbbell in each hand at shoulder level with palms facing forward.',
        process:
          'Press the dumbbells upward until your arms are fully extended above your chest. Lower the dumbbells back to the starting position in a controlled manner.',
        muscleMain: ['Upper Pectorals'],
        muscleAdditional: ['Front Deltoids', 'Triceps'],
        image: 'incline-dumbbell-press',
      },
    ],
  },
  {
    id: 'abs',
    name: 'Abs',
    exercises: [
      {
        id: '76',
        name: 'Crunch',
        group: 'Abs',
        focusPoints:
          'Engage core, avoid pulling on neck. Focus on lifting shoulders off the ground using abdominal muscles.',
        startPosition: 'Lie on your back with knees bent, feet flat on the floor, and hands behind your head.',
        process: 'Lift your shoulders off the ground towards your knees, then lower back to the starting position.',
        muscleMain: ['Rectus Abdominis'],
        muscleAdditional: ['Obliques'],
        image: 'crunch',
      },
      {
        id: '77',
        name: 'Plank',
        group: 'Abs',
        focusPoints:
          'Keep body in a straight line from head to heels, engage core. Focus on holding the position without sagging or arching your back.',
        startPosition: 'Get into a push-up position with forearms on the ground, elbows under shoulders.',
        process: 'Hold the position, maintaining a straight line from head to heels.',
        muscleMain: ['Rectus Abdominis', 'Transverse Abdominis'],
        muscleAdditional: ['Obliques', 'Lower Back'],
        image: 'plank',
      },
      {
        id: '78',
        name: 'Russian Twist',
        group: 'Abs',
        focusPoints: 'Engage core, rotate torso to move the weight side to side. Focus on controlled movements.',
        startPosition: 'Sit on the floor with knees bent, lean back slightly, hold a weight with both hands.',
        process: 'Rotate your torso to the right, then to the left, moving the weight side to side.',
        muscleMain: ['Obliques'],
        muscleAdditional: ['Rectus Abdominis'],
        image: 'russian-twist',
      },
      {
        id: '79',
        name: 'Leg Raise',
        group: 'Abs',
        focusPoints: 'Engage lower abs, keep legs straight. Focus on lifting legs without using momentum.',
        startPosition: 'Lie on your back with legs straight and hands under your hips.',
        process:
          'Lift your legs up until they are perpendicular to the floor, then lower back to the starting position.',
        muscleMain: ['Lower Abs'],
        muscleAdditional: ['Hip Flexors'],
        image: 'leg-raise',
      },
      {
        id: '80',
        name: 'Bicycle Crunch',
        group: 'Abs',
        focusPoints:
          'Engage core, move elbows towards opposite knees. Focus on controlled movements and fully extending legs.',
        startPosition: 'Lie on your back with knees bent, hands behind your head.',
        process: 'Bring your right elbow towards your left knee while extending your right leg, then switch sides.',
        muscleMain: ['Rectus Abdominis', 'Obliques'],
        muscleAdditional: ['Hip Flexors'],
        image: 'bicycle-crunch',
      },
      {
        id: '81',
        name: 'Mountain Climber',
        group: 'Abs',
        focusPoints: 'Engage core, drive knees towards chest. Focus on maintaining a steady pace and proper form.',
        startPosition: 'Get into a push-up position with hands shoulder-width apart.',
        process: 'Alternate bringing each knee towards your chest while keeping your hips down.',
        muscleMain: ['Rectus Abdominis'],
        muscleAdditional: ['Obliques', 'Hip Flexors'],
        image: 'mountain-climber',
      },
      {
        id: '82',
        name: 'Sit-Up',
        group: 'Abs',
        focusPoints:
          'Engage core, avoid pulling on neck. Focus on lifting your torso off the ground using abdominal muscles.',
        startPosition: 'Lie on your back with knees bent, feet flat on the floor, and hands behind your head.',
        process: 'Lift your torso towards your knees, then lower back to the starting position.',
        muscleMain: ['Rectus Abdominis'],
        muscleAdditional: ['Hip Flexors'],
        image: 'sit-up',
      },
      {
        id: '83',
        name: 'Hanging Leg Raise',
        group: 'Abs',
        focusPoints: 'Engage core, keep legs straight. Focus on lifting legs without using momentum.',
        startPosition: 'Hang from a pull-up bar with hands shoulder-width apart.',
        process:
          'Lift your legs up until they are perpendicular to the floor, then lower back to the starting position.',
        muscleMain: ['Lower Abs'],
        muscleAdditional: ['Hip Flexors'],
        image: 'hanging-leg-raise',
      },
      {
        id: '84',
        name: 'Ab Wheel Rollout',
        group: 'Abs',
        focusPoints: 'Engage core, keep back straight. Focus on rolling out and back in a controlled manner.',
        startPosition: 'Kneel on the floor, hold an ab wheel with both hands, arms extended in front of you.',
        process:
          'Roll the ab wheel forward, extending your body into a plank position, then roll back to the starting position.',
        muscleMain: ['Rectus Abdominis', 'Transverse Abdominis'],
        muscleAdditional: ['Lower Back', 'Shoulders'],
        image: 'ab-wheel-rollout',
      },
      {
        id: '85',
        name: 'V-Up',
        group: 'Abs',
        focusPoints: 'Engage core, lift legs and torso simultaneously. Focus on touching your toes with your hands.',
        startPosition: 'Lie on your back with legs straight and arms extended overhead.',
        process:
          'Lift your legs and torso simultaneously, reaching your hands towards your toes, then lower back to the starting position.',
        muscleMain: ['Rectus Abdominis'],
        muscleAdditional: ['Hip Flexors'],
        image: 'v-up',
      },
      {
        id: '86',
        name: 'Flutter Kick',
        group: 'Abs',
        focusPoints: 'Engage core, keep legs straight. Focus on maintaining a steady pace.',
        startPosition: 'Lie on your back with legs straight and hands under your hips.',
        process: 'Alternate lifting each leg a few inches off the ground in a fluttering motion.',
        muscleMain: ['Lower Abs'],
        muscleAdditional: ['Hip Flexors'],
        image: 'flutter-kick',
      },
      {
        id: '87',
        name: 'Side Plank',
        group: 'Abs',
        focusPoints:
          'Keep body in a straight line from head to heels, engage core. Focus on holding the position without sagging or arching your back.',
        startPosition: 'Lie on your side, prop yourself up on one elbow, feet stacked on top of each other.',
        process: 'Hold the position, maintaining a straight line from head to heels.',
        muscleMain: ['Obliques'],
        muscleAdditional: ['Rectus Abdominis', 'Lower Back'],
        image: 'side-plank',
      },
      {
        id: '88',
        name: 'Cable Crunch',
        group: 'Abs',
        focusPoints: 'Engage core, avoid pulling with arms. Focus on curling your torso towards your knees.',
        startPosition: 'Kneel in front of a cable machine, hold the rope attachment with both hands.',
        process: 'Curl your torso towards your knees, then return to the starting position.',
        muscleMain: ['Rectus Abdominis'],
        muscleAdditional: ['Obliques'],
        image: 'cable-crunch',
      },
      {
        id: '89',
        name: 'Medicine Ball Slam',
        group: 'Abs',
        focusPoints: 'Engage core, use full body motion. Focus on slamming the ball with force.',
        startPosition: 'Stand with feet shoulder-width apart, hold a medicine ball with both hands.',
        process: 'Raise the ball overhead, then slam it down to the ground as hard as you can.',
        muscleMain: ['Rectus Abdominis'],
        muscleAdditional: ['Obliques', 'Shoulders'],
        image: 'medicine-ball-slam',
      },
      {
        id: '90',
        name: 'Dead Bug',
        group: 'Abs',
        focusPoints: 'Engage core, keep lower back pressed to the floor. Focus on controlled movements.',
        startPosition: 'Lie on your back with arms extended towards the ceiling and knees bent at 90 degrees.',
        process:
          'Lower your right arm and left leg towards the floor, then return to the starting position and switch sides.',
        muscleMain: ['Rectus Abdominis', 'Transverse Abdominis'],
        muscleAdditional: ['Obliques', 'Hip Flexors'],
        image: 'dead-bug',
      },
    ],
  },
  {
    id: 'legs',
    name: 'Legs',
    exercises: [
      {
        id: '91',
        name: 'Squat',
        group: 'Legs',
        focusPoints:
          'Keep back straight, knees aligned with toes, lower to at least parallel. Focus on engaging the quads, hamstrings, and glutes.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell across your upper back.',
        process:
          'Lower your body by bending your knees and hips until your thighs are at least parallel to the floor, then return to the starting position.',
        muscleMain: ['Quads', 'Hamstrings', 'Glutes'],
        muscleAdditional: ['Core'],
        image: 'squat',
      },
      {
        id: '92',
        name: 'Lunge',
        group: 'Legs',
        focusPoints:
          'Keep torso upright, step forward and lower until both knees are at 90 degrees. Focus on engaging the quads and glutes.',
        startPosition: 'Stand with feet together, hands on hips or holding dumbbells at your sides.',
        process:
          'Step forward with one leg, lower your body until both knees are bent at 90 degrees, then return to the starting position.',
        muscleMain: ['Quads', 'Glutes'],
        muscleAdditional: ['Hamstrings', 'Core'],
        image: 'lunge',
      },
      {
        id: '93',
        name: 'Leg Press',
        group: 'Legs',
        focusPoints:
          'Keep back flat against the pad, lower the platform until knees are at 90 degrees. Focus on engaging the quads and glutes.',
        startPosition: 'Sit on a leg press machine, place feet shoulder-width apart on the platform.',
        process:
          'Lower the platform by bending your knees until they are at 90 degrees, then press the platform back to the starting position.',
        muscleMain: ['Quads', 'Glutes'],
        muscleAdditional: ['Hamstrings', 'Calves'],
        image: 'leg-press',
      },
      {
        id: '94',
        name: 'Bulgarian Split Squat',
        group: 'Legs',
        focusPoints:
          'Keep torso upright, lower until front thigh is parallel to the ground. Focus on engaging quads and glutes.',
        startPosition: 'Stand a few feet in front of a bench, place the top of one foot on the bench behind you.',
        process:
          'Lower your body by bending your front knee until your thigh is parallel to the ground, then press back up to the starting position.',
        muscleMain: ['Quads', 'Glutes'],
        muscleAdditional: ['Hamstrings', 'Core'],
        image: 'bulgarian-split-squat',
      },
      {
        id: '95',
        name: 'Leg Extension',
        group: 'Legs',
        focusPoints: 'Fully extend legs, control the movement. Focus on isolating the quads.',
        startPosition: 'Sit on a leg extension machine, place your shins behind the padded bar.',
        process: 'Extend your legs until they are straight, then lower back to the starting position.',
        muscleMain: ['Quads'],
        muscleAdditional: [],
        image: 'leg-extension',
      },
      {
        id: '96',
        name: 'Hamstring Curl',
        group: 'Legs',
        focusPoints: 'Fully contract hamstrings, control the movement. Focus on isolating the hamstrings.',
        startPosition: 'Lie face down on a hamstring curl machine, place your ankles under the padded bar.',
        process: 'Curl your legs up towards your glutes, then lower back to the starting position.',
        muscleMain: ['Hamstrings'],
        muscleAdditional: ['Glutes'],
        image: 'hamstring-curl',
      },
      {
        id: '97',
        name: 'Step-Up',
        group: 'Legs',
        focusPoints: 'Keep torso upright, press through the heel. Focus on engaging the quads and glutes.',
        startPosition: 'Stand in front of a bench or step, place one foot on the bench.',
        process:
          'Press through your heel to lift your body up onto the bench, then lower back to the starting position.',
        muscleMain: ['Quads', 'Glutes'],
        muscleAdditional: ['Hamstrings', 'Core'],
        image: 'step-up',
      },
      {
        id: '98',
        name: 'Glute Bridge',
        group: 'Legs',
        focusPoints:
          'Engage glutes, avoid arching lower back. Focus on lifting hips to align with knees and shoulders.',
        startPosition: 'Lie on your back with knees bent, feet flat on the floor, and arms at your sides.',
        process:
          'Lift your hips towards the ceiling by squeezing your glutes, then lower back to the starting position.',
        muscleMain: ['Glutes'],
        muscleAdditional: ['Hamstrings', 'Lower Back'],
        image: 'glute-bridge',
      },
      {
        id: '99',
        name: 'Romanian Deadlift',
        group: 'Legs',
        focusPoints: 'Keep back straight, hinge at hips. Focus on engaging hamstrings and glutes.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell with an overhand grip.',
        process:
          'Lower the barbell by pushing your hips back and keeping your back straight, then return to the starting position by extending your hips.',
        muscleMain: ['Hamstrings', 'Glutes'],
        muscleAdditional: ['Lower Back'],
        image: 'romanian-deadlift',
      },
      {
        id: '100',
        name: 'Goblet Squat',
        group: 'Legs',
        focusPoints:
          'Keep torso upright, lower until thighs are parallel to the ground. Focus on engaging quads and glutes.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell vertically in front of your chest.',
        process:
          'Lower your body by bending your knees and hips until your thighs are parallel to the ground, then return to the starting position.',
        muscleMain: ['Quads', 'Glutes'],
        muscleAdditional: ['Hamstrings', 'Core'],
        image: 'goblet-squat',
      },
      {
        id: '101',
        name: 'Box Jump',
        group: 'Legs',
        focusPoints: 'Explode off the ground, land softly. Focus on using leg muscles to generate power.',
        startPosition: 'Stand in front of a box or platform, feet shoulder-width apart.',
        process:
          'Jump onto the box, landing softly with knees slightly bent, then step back down to the starting position.',
        muscleMain: ['Quads', 'Glutes'],
        muscleAdditional: ['Calves'],
        image: 'box-jump',
      },
      {
        id: '102',
        name: 'Sumo Squat',
        group: 'Legs',
        focusPoints:
          'Keep back straight, lower until thighs are parallel to the ground. Focus on engaging inner thighs and glutes.',
        startPosition:
          'Stand with feet wider than shoulder-width apart, toes pointed out, hold a dumbbell or kettlebell with both hands.',
        process:
          'Lower your body by bending your knees and hips until your thighs are parallel to the ground, then return to the starting position.',
        muscleMain: ['Inner Thighs', 'Glutes'],
        muscleAdditional: ['Quads', 'Hamstrings'],
        image: 'sumo-squat',
      },
      {
        id: '104',
        name: 'Pistol Squat',
        group: 'Legs',
        focusPoints: 'Keep torso upright, lower until thigh is parallel to the ground. Focus on balance and control.',
        startPosition: 'Stand on one leg, extend the other leg in front of you, arms extended for balance.',
        process:
          'Lower your body by bending your standing leg until your thigh is parallel to the ground, then press back up to the starting position.',
        muscleMain: ['Quads', 'Glutes'],
        muscleAdditional: ['Hamstrings', 'Core'],
        image: 'pistol-squat',
      },
    ],
  },
  {
    id: 'calves',
    name: 'Calves',
    exercises: [
      {
        id: '106',
        name: 'Standing Calf Raise',
        group: 'Calves',
        focusPoints: 'Fully extend ankles, control the movement. Focus on isolating the calves.',
        startPosition:
          'Stand with feet shoulder-width apart, hold a dumbbell in each hand or stand on a raised surface.',
        process: 'Raise your heels off the ground by extending your ankles, then lower back to the starting position.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'standing-calf-raise',
      },
      {
        id: '107',
        name: 'Seated Calf Raise',
        group: 'Calves',
        focusPoints: 'Fully extend ankles, control the movement. Focus on isolating the calves.',
        startPosition:
          'Sit on a calf raise machine, place the balls of your feet on the platform, secure your knees under the pads.',
        process:
          'Raise your heels off the platform by extending your ankles, then lower back to the starting position.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'seated-calf-raise',
      },
      {
        id: '108',
        name: 'Donkey Calf Raise',
        group: 'Calves',
        focusPoints: 'Fully extend ankles, control the movement. Focus on isolating the calves.',
        startPosition:
          'Bend at the waist and hold onto a stable surface, with your hips high and feet flat on the ground.',
        process: 'Raise your heels off the ground by extending your ankles, then lower back to the starting position.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'donkey-calf-raise',
      },
      {
        id: '109',
        name: 'Single-Leg Calf Raise',
        group: 'Calves',
        focusPoints: 'Fully extend ankle, control the movement. Focus on isolating the calf muscle.',
        startPosition: 'Stand on one leg with the other leg slightly bent, holding onto a support for balance.',
        process: 'Raise your heel off the ground by extending your ankle, then lower back to the starting position.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'single-leg-calf-raise',
      },
      {
        id: '110',
        name: 'Jump Rope',
        group: 'Calves',
        focusPoints: 'Engage calves, maintain a steady rhythm. Focus on soft landings to reduce impact.',
        startPosition: 'Stand with feet together, holding a jump rope with hands at hip height.',
        process:
          'Swing the rope over your head and jump as it passes under your feet, landing softly on the balls of your feet.',
        muscleMain: ['Calves'],
        muscleAdditional: ['Coordination'],
        image: 'jump-rope',
      },
      {
        id: '113',
        name: 'Smith Machine Calf Raise',
        group: 'Calves',
        focusPoints: 'Fully extend ankles, control the movement. Focus on isolating the calves.',
        startPosition: 'Stand with feet shoulder-width apart under a Smith machine bar, bar resting on your shoulders.',
        process: 'Raise your heels off the ground by extending your ankles, then lower back to the starting position.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'smith-machine-calf-raise',
      },
      {
        id: '114',
        name: 'Leg Press Calf Raise',
        group: 'Calves',
        focusPoints: 'Fully extend ankles, control the movement. Focus on isolating the calves.',
        startPosition: 'Sit on a leg press machine, place the balls of your feet on the platform.',
        process: 'Press the platform by extending your ankles, then lower back to the starting position.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'leg-press-calf-raise',
      },
      {
        id: '115',
        name: 'Tip Toe Walk',
        group: 'Calves',
        focusPoints: 'Engage calves, maintain balance. Focus on a steady pace.',
        startPosition: 'Stand with feet shoulder-width apart, rise up onto your toes.',
        process: 'Walk forward on your toes for a set distance or time.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'tip-toe-walk',
      },
      {
        id: '116',
        name: 'Stair Climber',
        group: 'Calves',
        focusPoints:
          'Engage calves, maintain a steady pace. Focus on using the balls of your feet to push off each step.',
        startPosition: 'Stand at the bottom of a set of stairs or stair climber machine.',
        process:
          'Climb the stairs or use the stair climber machine, focusing on using your calves to push off each step.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'stair-climber',
      },
      {
        id: '117',
        name: 'Calf Press on Leg Press Machine',
        group: 'Calves',
        focusPoints: 'Fully extend ankles, control the movement. Focus on isolating the calves.',
        startPosition: 'Sit on a leg press machine, place the balls of your feet on the platform.',
        process: 'Press the platform by extending your ankles, then lower back to the starting position.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'calf-press-on-leg-press-machine',
      },
      {
        id: '118',
        name: 'Plyometric Calf Jump',
        group: 'Calves',
        focusPoints: 'Explode off the ground, land softly. Focus on using calf muscles to generate power.',
        startPosition: 'Stand with feet shoulder-width apart.',
        process: 'Jump as high as you can, focusing on using your calves, and land softly on the balls of your feet.',
        muscleMain: ['Calves'],
        muscleAdditional: ['Explosive Power'],
        image: 'plyometric-calf-jump',
      },
      {
        id: '120',
        name: 'Sand Walking',
        group: 'Calves',
        focusPoints: 'Engage calves, maintain a steady pace. Focus on pushing off the sand with each step.',
        startPosition: 'Stand on a sandy surface, such as a beach.',
        process: 'Walk forward, focusing on using your calves to push off the sand with each step.',
        muscleMain: ['Calves'],
        muscleAdditional: [],
        image: 'sand-walking',
      },
    ],
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    exercises: [
      {
        id: '121',
        name: 'Machine Shoulder Press',
        group: 'Shoulders',
        focusPoints:
          'Keep back against the pad, avoid arching lower back. Focus on pressing the weight directly overhead.',
        startPosition:
          'Sit on the machine with feet flat on the floor, grip the handles at shoulder level with elbows bent.',
        process:
          'Press the handles upward until arms are fully extended, then lower back to shoulder level in a controlled manner.',
        muscleMain: ['Deltoids'],
        muscleAdditional: ['Triceps', 'Upper Chest'],
        image: 'machine-shoulder-press',
      },
      {
        id: '122',
        name: 'Lateral Raise',
        group: 'Shoulders',
        focusPoints: 'Keep slight bend in elbows, lift weights to shoulder height. Focus on controlled movements.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell in each hand at your sides.',
        process:
          'Lift the weights out to the sides until they reach shoulder height, then lower back to the starting position.',
        muscleMain: ['Lateral Deltoids'],
        muscleAdditional: ['Traps'],
        image: 'lateral-raise',
      },
      {
        id: '123',
        name: 'Front Raise',
        group: 'Shoulders',
        focusPoints: 'Keep slight bend in elbows, lift weights to shoulder height. Focus on controlled movements.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell in each hand at your thighs.',
        process:
          'Lift the weights in front of you until they reach shoulder height, then lower back to the starting position.',
        muscleMain: ['Anterior Deltoids'],
        muscleAdditional: ['Upper Chest'],
        image: 'front-raise',
      },
      {
        id: '124',
        name: 'Rear Delt Fly',
        group: 'Shoulders',
        focusPoints:
          'Keep back straight, lift weights to shoulder height. Focus on squeezing shoulder blades together.',
        startPosition: 'Bend at the hips with back straight, hold a dumbbell in each hand.',
        process:
          'Lift the weights out to the sides until they reach shoulder height, then lower back to the starting position.',
        muscleMain: ['Posterior Deltoids'],
        muscleAdditional: ['Upper Back'],
        image: 'rear-delt-fly',
      },
      {
        id: '125',
        name: 'Upright Row',
        group: 'Shoulders',
        focusPoints: 'Keep back straight, lift elbows high. Focus on controlled movements.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell or dumbbells with an overhand grip.',
        process: 'Lift the weights to chest level by raising your elbows, then lower back to the starting position.',
        muscleMain: ['Deltoids'],
        muscleAdditional: ['Traps'],
        image: 'upright-row',
      },
      {
        id: '126',
        name: 'Arnold Press',
        group: 'Shoulders',
        focusPoints: 'Rotate wrists during press, avoid arching lower back. Focus on controlled movements.',
        startPosition:
          'Sit or stand with feet shoulder-width apart, hold a dumbbell in each hand at shoulder level with palms facing you.',
        process:
          'Press the weights overhead while rotating your wrists until palms face forward, then lower back to the starting position.',
        muscleMain: ['Deltoids'],
        muscleAdditional: ['Triceps'],
        image: 'arnold-press',
      },
      {
        id: '129',
        name: 'Military Press',
        group: 'Shoulders',
        focusPoints: 'Keep back straight, avoid arching lower back. Focus on pressing weight directly overhead.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell at shoulder level.',
        process: 'Press the weight overhead until arms are fully extended, then lower back to shoulder level.',
        muscleMain: ['Deltoids'],
        muscleAdditional: ['Triceps', 'Upper Chest'],
        image: 'military-press',
      },
      {
        id: '130',
        name: 'Overhead Press',
        group: 'Shoulders',
        focusPoints: 'Keep back straight, avoid arching lower back. Focus on pressing weight directly overhead.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell or dumbbells at shoulder level.',
        process: 'Press the weight overhead until arms are fully extended, then lower back to shoulder level.',
        muscleMain: ['Deltoids'],
        muscleAdditional: ['Triceps', 'Upper Chest'],
        image: 'overhead-press',
      },
      {
        id: '131',
        name: 'Push Press',
        group: 'Shoulders',
        focusPoints:
          'Use slight leg drive to assist press, keep back straight. Focus on pressing weight directly overhead.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell at shoulder level.',
        process:
          'Dip slightly at the knees, then press the weight overhead using the momentum from your legs, then lower back to shoulder level.',
        muscleMain: ['Deltoids'],
        muscleAdditional: ['Triceps', 'Upper Chest'],
        image: 'push-press',
      },
      {
        id: '132',
        name: 'Plate Front Raise',
        group: 'Shoulders',
        focusPoints: 'Keep slight bend in elbows, lift plate to shoulder height. Focus on controlled movements.',
        startPosition: 'Stand with feet shoulder-width apart, hold a weight plate with both hands at your thighs.',
        process:
          'Lift the plate in front of you until it reaches shoulder height, then lower back to the starting position.',
        muscleMain: ['Anterior Deltoids'],
        muscleAdditional: ['Upper Chest'],
        image: 'plate-front-raise',
      },
      {
        id: '133',
        name: 'Resistance Band Lateral Raise',
        group: 'Shoulders',
        focusPoints: 'Keep slight bend in elbows, lift bands to shoulder height. Focus on controlled movements.',
        startPosition: 'Stand with feet shoulder-width apart, hold a resistance band with both hands at your sides.',
        process:
          'Lift the bands out to the sides until they reach shoulder height, then lower back to the starting position.',
        muscleMain: ['Lateral Deltoids'],
        muscleAdditional: ['Traps'],
        image: 'resistance-band-lateral-raise',
      },
      {
        id: '134',
        name: 'Cable Front Raise',
        group: 'Shoulders',
        focusPoints: 'Keep slight bend in elbows, lift cable to shoulder height. Focus on controlled movements.',
        startPosition: 'Stand facing away from a cable machine, hold the cable handle with one hand at your thigh.',
        process:
          'Lift the cable in front of you until it reaches shoulder height, then lower back to the starting position.',
        muscleMain: ['Anterior Deltoids'],
        muscleAdditional: ['Upper Chest'],
        image: 'cable-front-raise',
      },
      {
        id: '135',
        name: 'Dumbbell Press',
        group: 'Shoulders',
        focusPoints: 'Keep back straight, avoid arching lower back. Focus on pressing weight directly overhead.',
        startPosition: 'Sit or stand with feet shoulder-width apart, hold a dumbbell in each hand at shoulder level.',
        process: 'Press the weights overhead until arms are fully extended, then lower back to shoulder level.',
        muscleMain: ['Deltoids'],
        muscleAdditional: ['Triceps', 'Upper Chest'],
        image: 'dumbbell-press',
      },
      {
        id: '204',
        name: 'Cuban Press',
        group: 'Shoulders',
        focusPoints:
          'Keep movements controlled and maintain a straight back. Avoid using momentum to lift the weights.',
        startPosition:
          'Stand with feet shoulder-width apart, hold a pair of dumbbells with an overhand grip in front of your thighs.',
        process:
          'Lift the dumbbells to shoulder height with elbows bent at 90 degrees (like an upright row), rotate your shoulders to bring the dumbbells overhead, then press them up until your arms are fully extended. Reverse the motion to return to the start position.',
        muscleMain: ['Deltoids'],
        muscleAdditional: ['Rotator Cuffs', 'Trapezius'],
        image: 'cuban-press',
      },
    ],
  },
  {
    id: 'trapezius',
    name: 'Trapezius',
    exercises: [
      {
        id: '136',
        name: 'Shrug',
        group: 'Trapezius',
        focusPoints: 'Lift shoulders straight up towards ears, avoid rolling. Focus on squeezing traps at the top.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell in each hand at your sides.',
        process: 'Lift your shoulders straight up towards your ears, then lower back to the starting position.',
        muscleMain: ['Trapezius'],
        muscleAdditional: ['Neck', 'Upper Back'],
        image: 'shrug',
      },
      {
        id: '137',
        name: 'Face Pull',
        group: 'Trapezius',
        focusPoints: 'Pull rope towards face, keep elbows high. Focus on squeezing shoulder blades together.',
        startPosition: 'Stand facing a cable machine, grip the rope attachment with both hands.',
        process:
          'Pull the rope towards your face, squeezing your shoulder blades together, then return to the starting position.',
        muscleMain: ['Upper Back', 'Rear Delts'],
        muscleAdditional: ['Trapezius', 'Biceps'],
        image: 'face-pull',
      },
      {
        id: '139',
        name: "Farmer's Walk",
        group: 'Trapezius',
        focusPoints: 'Keep core engaged, walk with steady steps. Focus on gripping the weights tightly.',
        startPosition: 'Stand with feet shoulder-width apart, hold a heavy dumbbell in each hand.',
        process:
          'Walk forward for a set distance or time, maintaining an upright posture and a firm grip on the weights.',
        muscleMain: ['Forearms', 'Trapezius'],
        muscleAdditional: ['Core', ''],
        image: 'farmers-walk',
      },
      {
        id: '140',
        name: 'Rack Pull',
        group: 'Trapezius',
        focusPoints: 'Keep back straight, lift bar by extending hips and knees. Focus on engaging traps at the top.',
        startPosition: 'Stand with feet shoulder-width apart, barbell set at knee height in a rack.',
        process:
          'Lift the barbell by extending your hips and knees until standing upright, then lower back to the starting position.',
        muscleMain: ['Lower Back', 'Trapezius'],
        muscleAdditional: ['Glutes', 'Hamstrings'],
        image: 'rack-pull',
      },
      {
        id: '141',
        name: 'High Pull',
        group: 'Trapezius',
        focusPoints: 'Keep elbows high, pull bar up to chest. Focus on using traps to lift the weight.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell with an overhand grip.',
        process: 'Pull the barbell up to chest level by raising your elbows, then lower back to the starting position.',
        muscleMain: ['Trapezius', 'Deltoids'],
        muscleAdditional: ['Biceps'],
        image: 'high-pull',
      },
      {
        id: '142',
        name: 'T-Bar Row',
        group: 'Trapezius',
        focusPoints: 'Keep back straight, pull handles to chest. Focus on squeezing shoulder blades together.',
        startPosition: 'Stand over a T-bar, grip the handles with a neutral grip.',
        process:
          'Pull the handles to your chest, squeezing your shoulder blades together, then lower back to the starting position.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Trapezius', 'Biceps'],
        image: 't-bar-row',
      },
      {
        id: '143',
        name: 'Dumbbell Lateral Raise',
        group: 'Trapezius',
        focusPoints: 'Keep slight bend in elbows, lift weights to shoulder height. Focus on controlled movements.',
        startPosition: 'Stand with feet shoulder-width apart, hold a dumbbell in each hand at your sides.',
        process:
          'Lift the weights out to the sides until they reach shoulder height, then lower back to the starting position.',
        muscleMain: ['Lateral Deltoids'],
        muscleAdditional: ['Trapezius'],
        image: 'dumbbell-lateral-raise',
      },
      {
        id: '145',
        name: 'Barbell Row',
        group: 'Trapezius',
        focusPoints: 'Keep back straight, pull bar to lower chest. Focus on squeezing shoulder blades together.',
        startPosition:
          'Stand with feet shoulder-width apart, bend at hips, grip barbell with hands shoulder-width apart.',
        process:
          'Pull the barbell to your lower chest, squeezing your shoulder blades together, then lower back to the starting position.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Trapezius', 'Biceps'],
        image: 'barbell-row',
      },
      {
        id: '146',
        name: 'Dumbbell Row',
        group: 'Trapezius',
        focusPoints: 'Keep back straight, pull elbow back. Focus on squeezing shoulder blade.',
        startPosition: 'Place one knee and hand on a bench, grip dumbbell with other hand.',
        process:
          'Pull the dumbbell to your lower chest, squeezing your shoulder blade, then lower back to the starting position.',
        muscleMain: ['Upper Back', 'Lats'],
        muscleAdditional: ['Trapezius', 'Biceps'],
        image: 'dumbbell-row',
      },
      {
        id: '148',
        name: 'Trap Bar Deadlift',
        group: 'Trapezius',
        focusPoints: 'Keep back straight, lift bar by extending hips and knees. Focus on engaging traps at the top.',
        startPosition: 'Stand with feet shoulder-width apart inside a trap bar, grip the handles.',
        process:
          'Lift the bar by extending your hips and knees until standing upright, then lower back to the starting position.',
        muscleMain: ['Lower Back', 'Trapezius'],
        muscleAdditional: ['Glutes', 'Hamstrings'],
        image: 'trap-bar-deadlift',
      },
      {
        id: '149',
        name: 'Snatch-Grip Deadlift',
        group: 'Trapezius',
        focusPoints: 'Keep back straight, grip bar with wide grip. Focus on engaging traps at the top.',
        startPosition: 'Stand with feet shoulder-width apart, grip the bar with a wide overhand grip.',
        process:
          'Lift the bar by extending your hips and knees until standing upright, then lower back to the starting position.',
        muscleMain: ['Lower Back', 'Trapezius'],
        muscleAdditional: ['Glutes', 'Hamstrings'],
        image: 'snatch-grip-deadlift',
      },
      {
        id: '150',
        name: 'Cable Shrug',
        group: 'Trapezius',
        focusPoints: 'Lift shoulders straight up towards ears, avoid rolling. Focus on squeezing traps at the top.',
        startPosition: 'Stand with feet shoulder-width apart, grip cable handles at your sides.',
        process: 'Lift your shoulders straight up towards your ears, then lower back to the starting position.',
        muscleMain: ['Trapezius'],
        muscleAdditional: ['Neck', 'Upper Back'],
        image: 'cable-shrug',
      },
    ],
  },
];

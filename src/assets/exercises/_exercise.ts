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
        id: '40',
        name: 'Zottman Curl',
        group: 'Biceps',
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
        id: '43',
        name: 'Reverse Curl',
        group: 'Biceps',
        focusPoints:
          'Keep elbows stationary, fully extend arms at the bottom. Focus on controlled movements to engage biceps.',
        startPosition: 'Stand with feet shoulder-width apart, hold a barbell with an overhand grip.',
        process:
          'Curl the barbell towards your shoulders by bending your elbows, then lower back to the starting position.',
        muscleMain: ['Biceps'],
        muscleAdditional: ['Forearms'],
        image: 'reverse-curl',
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

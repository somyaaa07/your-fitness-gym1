import { Dumbbell, Flame, Zap, Move, Bike, Timer, UserCheck, Wind } from "lucide-react";

export const programs = [
  {
    id: "muscle-building",
    title: "Muscle Building",
    icon: Dumbbell,
    description: "Build strength and gain lean muscle effectively.",
    longDescription:
      "A structured hypertrophy program combining progressive overload with compound and isolation lifts to pack on quality lean muscle mass.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    duration: "60 min",
    difficulty: "Intermediate",
    trainer: "Kabir Malhotra",
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    icon: Flame,
    description: "Burn fat and achieve a fitter, healthier you.",
    longDescription:
      "High-intensity metabolic conditioning paired with nutrition coaching designed to accelerate fat loss while preserving lean muscle.",
    image:
      "https://i.pinimg.com/736x/f2/0c/fe/f20cfe33cd115730b745ae65ac0cee65.jpg",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Ishita Rao",
  },
  {
    id: "strength-training",
    title: "Strength Training",
    icon: Zap,
    description: "Improve endurance, strength and overall performance.",
    longDescription:
      "Barbell-focused strength cycles built around the big lifts to increase raw power, endurance, and total-body performance.",
    image:
      "https://i.pinimg.com/1200x/a3/ba/68/a3ba681a7cd8d3fc9214483cba8db32d.jpg",
    duration: "75 min",
    difficulty: "Advanced",
    trainer: "Dev Chauhan",
  },
  {
    id: "functional-training",
    title: "Functional Training",
    icon: Move,
    description: "Train for real-life movements and everyday strength.",
    longDescription:
      "Multi-planar movement patterns that build mobility, balance and real-world strength for everyday life and sport.",
    image:
      "https://i.pinimg.com/736x/18/8d/cf/188dcfffd23bdbf8d6f1385690928540.jpg",
    duration: "50 min",
    difficulty: "Intermediate",
    trainer: "Kabir Malhotra",
  },
  {
    id: "crossfit",
    title: "CrossFit",
    icon: Timer,
    description: "Constantly varied, high-intensity functional movement.",
    longDescription:
      "Community-driven WODs blending gymnastics, weightlifting and conditioning for elite, all-round fitness.",
    image:
      "https://i.pinimg.com/1200x/5d/db/80/5ddb808a62e21d9d7835e41cc7c51510.jpg",
    duration: "60 min",
    difficulty: "Advanced",
    trainer: "Dev Chauhan",
  },
  {
    id: "hiit",
    title: "HIIT",
    icon: Bike,
    description: "Short, intense intervals for maximum calorie burn.",
    longDescription:
      "Explosive interval circuits engineered to spike your metabolism and torch calories long after the session ends.",
    image:
      "https://i.pinimg.com/1200x/67/89/a7/6789a781a447833c58268cacdadbb4b0.jpg",
    duration: "30 min",
    difficulty: "Intermediate",
    trainer: "Ishita Rao",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    icon: UserCheck,
    description: "One-on-one coaching tailored to your goals.",
    longDescription:
      "Fully personalized programming, form correction and accountability with a dedicated coach by your side.",
    image:
      "https://i.pinimg.com/1200x/ef/51/a4/ef51a4681d575c7232d78ce053b1dc3a.jpg",
    duration: "60 min",
    difficulty: "All Levels",
    trainer: "Kabir Malhotra",
  },
  {
    id: "yoga-mobility",
    title: "Yoga & Mobility",
    icon: Wind,
    description: "Recover, stretch and move with more freedom.",
    longDescription:
      "Guided mobility flows and breathwork to improve recovery, flexibility and long-term joint health.",
    image:
      "https://i.pinimg.com/1200x/55/6a/6c/556a6c36d7712614cbad898600b8d83c.jpg",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Ishita Rao",
  },
];

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
      "https://i.pinimg.com/1200x/f1/5f/74/f15f74a6029b7a076c31da6bc6de4ad4.jpg",
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
      "https://i.pinimg.com/736x/4b/27/b3/4b27b3410fa710bfad2d0e9225ebd451.jpg",
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
      "https://i.pinimg.com/1200x/07/f9/f0/07f9f0d070bef77064f186f35d25d974.jpg",
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
      "https://i.pinimg.com/1200x/17/17/b0/1717b0fc049add0ca164bb90980e47b1.jpg",
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
      "https://i.pinimg.com/736x/7a/bb/9b/7abb9b0fa990e71618fdeb289213e90d.jpg",
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
      "https://i.pinimg.com/1200x/24/83/f3/2483f3e659a988c39a2a70238ac841a4.jpg",
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
      "https://i.pinimg.com/736x/45/a3/c4/45a3c4361ac62f7b6a92df76d49864f3.jpg",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Ishita Rao",
  },
];

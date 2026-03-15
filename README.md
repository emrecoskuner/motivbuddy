# MotivBuddy

MotivBuddy is a mobile application designed to help people stay motivated and accountable while pursuing personal goals.

The product combines goal tracking, habit building, and social accountability to help users stay consistent and make real progress.

MotivBuddy is not just a task manager. It is a motivation system.

---

# Product Vision

Many people start goals but fail to stay consistent.

MotivBuddy solves this problem by combining:

• goal tracking  
• task breakdown  
• progress visibility  
• streak tracking  
• social accountability  
• motivation through progress feedback  

Users can track personal goals or shared goals with friends and stay motivated through visible progress and accountability.

---

# Core Features

### Goals
Users can create long-term or short-term goals.

Examples:
• Lose weight  
• Learn a language  
• Build a startup  
• Exercise consistently  

Each goal can contain multiple tasks.

---

### Tasks
Tasks are actionable steps inside goals.

Example:

Goal: Run a marathon

Tasks:
• Run 5km  
• Increase distance  
• Weekly training plan  

Completing tasks increases progress.

---

### Progress Tracking

MotivBuddy visually tracks progress for every goal.

Examples:
• progress bars
• completion percentages
• visual milestones

---

### Streak System

Consistency is encouraged through streak tracking.

Examples:
• daily streak
• weekly streak
• habit streak

Streaks increase motivation and accountability.

---

### Badges and Achievements

Users unlock achievements for progress and consistency.

Examples:
• 7 day streak
• first goal completed
• 30 tasks completed

---

### Social Accountability

Users can connect with friends and share goals.

Examples:
• shared goals
• progress visibility
• encouragement and motivation

This creates positive pressure and accountability.

---

# Development Philosophy

MotivBuddy will be developed **screen by screen with continuous testing**.

Instead of building the entire application first, the workflow will be:

1. Design one screen
2. Implement the screen
3. Test immediately on device/emulator
4. Improve UI/UX
5. Continue to the next screen

This approach ensures:

• early bug detection  
• better UI decisions  
• faster iteration  
• a more polished product

---

# MVP Scope

The first version of MotivBuddy will include:

• Welcome / Onboarding screen  
• Sign Up / Sign In  
• Home dashboard  
• Goal creation  
• Task creation  
• Task completion  
• Progress visualization  
• Basic streak tracking  
• Profile page  

More advanced features will be added later.

---

# Planned Tech Stack

Mobile App  
React Native  
Expo  
TypeScript  

Navigation  
Expo Router

State Management  
Zustand

Backend  
Supabase

Future additions may include AI-assisted planning features.

---

# Codex / AI Development Instructions

When generating code for this repository, follow these rules:

• build **one screen at a time**  
• every screen must be testable immediately  
• prioritize **clean mobile UI**  
• avoid generating the entire application at once  
• keep components reusable and modular  
• do not introduce unnecessary complexity early  
• prioritize spacing, hierarchy, and usability  
• prefer maintainable production-style code

If a feature requires backend infrastructure that is not yet implemented, create the UI first and stub the logic.

---

# Development Priority

Initial development order:

1. Project setup
2. Welcome / onboarding screen
3. Authentication screens
4. Home dashboard
5. Goal creation
6. Task creation
7. Progress visualization

---

# Repository Goal

This repository should evolve as a **real product**, not a rushed prototype.

Every screen should be:

• visually testable  
• cleanly structured  
• easy to iterate on

---

# Status

Project initialized.

MotivBuddy development is starting from scratch using a screen-by-screen development workflow with continuous UI testing.

export const CONTENT = {
    auth: {
        login: {
            header: "Welcome back",
            subheader: "Sign in to continue creating quizzes, managing responses, and tracking your audience.",

        },
        sign_up: {
            header: "Create an account",
            subheader: "Join QuizBuilder today and start building engaging quizzes in just a few clicks.",
        },

        to_signUp: {
            text: "Don’t have an account?",
            boldtext: "Sign up"
        },
        to_logIn: {
            text: "Already have an account?",
            boldtext: "Log in"
        },
        form: {
            fullName: {
                label: "Full name*",
                placeholder: "Enter your full name",
                error: "Please enter your full name",
            },
            email: {
                label: "Email*",
                placeholder: "Enter your email",
                error: "Please enter a valid email address",
            },
            password: {
                label: "Password*",
                placeholder: "Create a password",
                error: "Password must be at least 8 characters long",

            },
            confirmPassword: {
                label: "Confirm password*",
                placeholder: "Confirm your password",
                error: "Passwords do not match",
            },
            button: {
                login: "Log in ",
                signUp: "Create account",
                google: "Sign up with Google"
            },
        },
        contentSectionSlider: [
            {
                headers: ["Create Faster", "Design Freely", "Share Instantly"],
                paragraph: [
                    "Build professional quizzes with an intuitive editor and publish them in just a few clicks.",
                ]
            }, {
                headers:
                    ["Collect Responses", "Analyze Results", "Gain Insights"],
                paragraph: [
                    "Monitor submissions in real time and discover valuable trends with clear analytics.",
                ]
            }, {
                headers:
                    ["Engage Users", "Grow Together", "Collaborate Easily"],
                paragraph: [
                    "Create public or private quizzes, invite your team, and keep everything organized in one place.",
                ]
            }
        ]
    },
    footer: {
        subtitle: 'The easiest way to create interactive quizzes and surveys.',
        rightsReserved: '© Quiz Flow. All rights reserved.',
        email: 'quizflow@email.com',
        tagline: 'Simple to build. Easy to share.',
        recommendations: {
            title: 'Questions or Feedback?',
            email: 'nbulmak@gmail.com',
            commertial_text: 'This is a non-commercial portfolio project created by',
            creator: 'Nadiia Bulmak',
        },
    },
    // main: {
    //     first_screen: {
    //         title: "FLOW. FOCUS. GROW.",
    //         subtitle: "A focused workspace\nfor deep work and",
    //         subtitle_underline: "real progress.",
    //         button: "Start Focus Session",
    //         button_secondary: "Explore features",
    //         adventages: ["Maximum Focus", "Minimum Distractions"],
    //         buttons: {
    //             primary: "Start Focus Session",
    //             secondary: "Explore features"
    //         }
    //     }
    // },
    // features: {
    //     title: "Designed for Deep Work",
    //     items: [
    //         {
    //             title: "Smart Presets",
    //             description: "Save your preferred session formats and launch them instantly."
    //         },
    //         {
    //             title: "Focus Sessions",
    //             description: "Create custom work cycles with flexible focus and rest durations."
    //         },
    //         {
    //             title: "Progress Tracking",
    //             description: "Measure real productivity — not just time spent."
    //         },
    //         {
    //             title: "Minimal Interface",
    //             description: "Create custom work cycles with flexible focus and rest durations."
    //         },
    //     ]
    // },
    // stats: {
    //     professonals: {
    //         title: 'Focused Professionals', count: 4000
    //     },
    //     sessions: {
    //         title: 'Focus Sessions Completed', count: 1200000
    //     },
    //     focus_score: {
    //         title: 'Average Focus Score', percentage: 96,
    //     },
    //     hours: {
    //         title: "Hours of Deep Work", count: 24000000
    //     }
    // },
    // system: {
    //     title: "The FlowGrow Focus System",
    //     items: [
    //         {
    //             title: "Plan",
    //             description: "Set your goal and choose a preset that fits your day."
    //         },
    //         {
    //             title: "Focus",
    //             description: "Enter deep work mode and block distractions."
    //         },
    //         {
    //             title: "Track",
    //             description: "We track your progress and focus metrics."
    //         },
    //         {
    //             title: "Grow",
    //             description: "Review insights and improve every day."
    //         },
    //     ]
    // },
    // banner: {
    //     title: 'READY TO GROW?',
    //     button: 'Start Your Focus Session', no_cash_required: 'No credit card required.'
    // },
    // demo_section: {
    //     title: 'See FlowGrow in action',
    //     subtitle: 'Everything you need to build better focus habits and achieve neaningfull progress.',
    //     button: 'View full demo',
    //     images: [
    //         {title: 'Designed for Long-Term Growth', image: ''}
    //     ]
    // }, 
    // interactive_section: {
    //     left: [
    //         'Focus is a system.','Growth is the result.'
    //     ], 
    //     right: [
    //         'Interactive Canvas',
    //         'Move your cursor and see focus in motion.'
    //     ]
    // }
    create: {
        base: {
            section_title: 'Basic Information',
            question_section_title: 'Questions',
            question_section_subtitle: 'questions added',
            question_tips: 'Drag questions to reorder them. ',
            title: {
                label: 'Quiz Title',
                placeholder: 'Enter quiz title'
            },
            description: {
                label: 'Description',
                placeholder: 'Add a short description...'
            },
            difficulty: {
                label: 'Difficulty',
                placeholder: 'Select difficulty'
            },
            category: {
                label: 'Category',
            }
        },
        questions: {
            title: "Questions",
            subtitle: "questions added",
            item: "Question",
            q_text: 'Question text',
            q_text_placeholder: 'Enter question text',
            a_options: "Answer options",
            a_options_placeholder: "Enter answer options",
            explanation: "Explanation(optional)",
            explanation_placeholder: "Enter explanation(optional)",
            options_empty_text: 'Add more than 1 option'
        },
        buttons: {
            add_question:  'Add Question',
            add_option:  'Add Option',
            save: 'Publish Quiz',
            patch: 'Update Quiz',
            draft: 'Save Draft',
            collapse: 'Collapse all'
        }
    }
}

import {
    ArrowUp,
    Bot,
    FileCode2,
    FolderOpen,
    Paperclip,
    Sparkles,
    Terminal,
    WandSparkles,
} from "lucide-react";

/* =========================================================
   SUGGESTED PROMPTS
========================================================= */

const suggestedPrompts = [
    {
        icon: WandSparkles,
        title: "Build a feature",
        description: "Create a complete feature from a description",
    },
    {
        icon: FileCode2,
        title: "Explain my code",
        description: "Understand how a file or function works",
    },
    {
        icon: Terminal,
        title: "Fix an error",
        description: "Debug an error and find the root cause",
    },
    {
        icon: FolderOpen,
        title: "Understand my project",
        description: "Analyze the project structure and architecture",
    },
];

/* =========================================================
   BACKGROUND
========================================================= */

function ChatBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {/* Main glow */}
            <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

            {/* Left glow */}
            <div className="absolute left-[-250px] top-[45%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[130px]" />

            {/* Bottom glow */}
            <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[130px]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
        </div>
    );
}

/* =========================================================
   HEADER
========================================================= */

function ChatHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-white/[0.06] px-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]">
                    <Sparkles className="h-4 w-4 text-violet-300" />
                </div>

                <div>
                    <h1 className="text-sm font-semibold text-zinc-200">
                        DevAgent
                    </h1>

                    <p className="text-[10px] text-zinc-600">
                        New conversation
                    </p>
                </div>
            </div>

            {/* Model */}
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[11px] text-zinc-400">
                    DeepSeek Coder
                </span>
            </div>
        </header>
    );
}

/* =========================================================
   WELCOME
========================================================= */

function ChatWelcome() {
    return (
        <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-20 text-center">
            {/* AI Icon */}
            <div className="relative mb-7">
                <div className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-2xl" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-white/[0.05] shadow-2xl shadow-violet-500/10">
                    <Bot className="h-7 w-7 text-violet-300" />
                </div>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                What are you building?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                Describe what you want to build, change, or fix. DevAgent will
                understand your project, create a plan, and work through the task
                with you.
            </p>
        </section>
    );
}

/* =========================================================
   SUGGESTIONS
========================================================= */

function ChatSuggestions() {
    return (
        <section className="mx-auto mt-12 grid max-w-3xl gap-3 px-6 sm:grid-cols-2">
            {suggestedPrompts.map((prompt) => {
                const Icon = prompt.icon;

                return (
                    <button
                        key={prompt.title}
                        type="button"
                        className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.045]"
                    >
                        {/* Glow */}
                        <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />

                        <div className="relative flex gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                                <Icon className="h-4 w-4 text-violet-300" />
                            </div>

                            <div>
                                <h3 className="text-xs font-medium text-zinc-200">
                                    {prompt.title}
                                </h3>

                                <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                                    {prompt.description}
                                </p>
                            </div>
                        </div>
                    </button>
                );
            })}
        </section>
    );
}

/* =========================================================
   PROMPT COMPOSER
========================================================= */

function PromptComposer() {
    return (
        <div className="mx-auto w-full max-w-3xl px-6">
            <div className="rounded-2xl border border-white/[0.1] bg-[#0d0f14]/90 shadow-2xl shadow-black/30 backdrop-blur-xl transition focus-within:border-violet-400/30 focus-within:shadow-violet-500/5">
                {/* Input */}
                <textarea
                    placeholder="Ask DevAgent to build something..."
                    rows={3}
                    className="w-full resize-none bg-transparent px-5 pt-4 text-sm leading-6 text-zinc-200 outline-none placeholder:text-zinc-600"
                />

                {/* Composer bottom */}
                <div className="flex items-center justify-between px-3 pb-3">
                    {/* Left controls */}
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-300"
                        >
                            <Paperclip className="h-4 w-4" />
                        </button>

                        <span className="hidden text-[10px] text-zinc-700 sm:block">
                            Attach files
                        </span>
                    </div>

                    {/* Send */}
                    <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black shadow-lg shadow-white/5 transition hover:bg-zinc-200"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-3 text-center text-[10px] text-zinc-700">
                DevAgent can make mistakes. Review generated code before running it.
            </p>
        </div>
    );
}

/* =========================================================
   BOTTOM AREA
========================================================= */

function ChatBottom() {
    return (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#08090d] via-[#08090d] to-transparent pb-6 pt-20">
            <PromptComposer />
        </div>
    );
}

/* =========================================================
   CHAT
========================================================= */

export default function Chat() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#08090d] text-white">
            <ChatBackground />

            <div className="relative flex min-h-screen flex-col">
                <ChatHeader />

                <main className="flex-1 overflow-y-auto pb-56">
                    <ChatWelcome />

                    <ChatSuggestions />
                </main>

                <ChatBottom />
            </div>
        </div>
    );
}


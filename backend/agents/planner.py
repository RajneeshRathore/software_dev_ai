from llm.model import llm


def planner_agent(state):

    requirement = state["user_requirement"]

    prompt = f"""
You are the Planner Agent of an AI software development platform.

Your job is to analyze the developer's requirement and create
a clear development plan.

Developer requirement:
{requirement}

Create a development plan containing:

1. Project type
2. Recommended technologies
3. Main components
4. Development tasks
5. Testing requirements

Do NOT write the actual code.

Focus only on planning.
"""

    response = llm.invoke(prompt)

    state["plan"] = {
        "content": response.content
    }

    state["status"] = "PLANNED"

    return state
from agents.planner import planner_agent


initial_state = {
    "project_id": "project_001",

    "user_requirement": """
    Build a REST API for a student management system.
    The backend should use Flask and PostgreSQL.
    It should support creating, reading, updating and deleting students.
    """,

    "plan": {},

    "files": {},

    "test_results": "",

    "review_result": "",

    "errors": [],

    "iteration": 0,

    "status": "STARTED"
}


final_state = planner_agent(initial_state)


print("\n========== PLANNER OUTPUT ==========\n")

print(final_state["plan"]["content"])

print("\n====================================\n")

print("Status:", final_state["status"])
# from llm.model import llm

# response = llm.invoke("what is api")
# print(response)

# from pathlib import Path

# dir = Path(__file__).resolve().parents[1]

# print(dir)

# import chromadb

# from chromadb.config import Settings
# from pathlib import Path

# dir = Path(__file__)
# dir = Path('/backend').resolve()
# print(dir)
# dir.mkdir(parents=True,exist_ok=True)


# client  = chromadb.PersistentClient(
#     path=str(dir),
#     settings=Settings(anonymized_telemetry=False)
# )


# ans = client.get_or_create_collection(
#       name="test_collect",
#       metadata={'hnsw:space': 'cosine'}
# )

# print(ans)

# from langchain_core.callbacks import BaseCallbackHandler

if __name__ == '__main__':

    print(__name__)
    print("running test.py directly")

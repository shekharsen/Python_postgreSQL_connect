import psycopg2
from config import config

def fetch():
    #connection creation
    connection = None
    try:
        params = config()
        conn = psycopg2.connect(**params)

        cur = conn.cursor()
        cur.execute("SELECT * FROM person")
        return cur.fetchall()
        cur.close()
    except(Exception, psycopg2.DatabaseError) as error:
        return error
    finally:
        if connection is not None:
            connection.close()

def inputData(query):
    conn = None
    try:
        params = config()
        conn = psycopg2.connect(**params)

        curr = conn.cursor()
        curr.execute(query)
        curr.close()
    except(Exception, psycopg2.DatabaseError) as error:
        return error
    finally:
        if conn is not None:
            conn.close()    

def test_pgvector():
    conn = None
    try:
        params = config()
        conn = psycopg2.connect(**params)

        cur = conn.cursor()
        cur.execute("SELECT * FROM items ORDER BY embedding <-> '[3, 2, 1]' LIMIT 1")
        print(cur.fetchall())
    except(Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()



# demo_payments.py - intentionally vulnerable, for merge-gate testing.
import sqlite3


# Hardcoded cloud secret (secret scanner -> CRITICAL).
AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"


def get_user(db: sqlite3.Connection, user_id: str):
    cur = db.cursor()
    # SQL injection: user_id interpolated straight into the query.
    cur.execute(f"SELECT * FROM users WHERE id = {user_id}")
    return cur.fetchone()


def run_expr(expr: str):
    # Arbitrary code execution from untrusted input.
    return eval(expr)

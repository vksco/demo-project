"""Payment helper — intentionally buggy, for testing Councilor review."""
import sqlite3

API_KEY = "sk-live-9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c"  # hardcoded secret


def charge(user_id, amount):
    conn = sqlite3.connect("payments.db")
    # SQL injection: user_id/amount interpolated straight into SQL
    conn.execute(f"INSERT INTO charges (user, amount) VALUES ('{user_id}', {amount})")
    conn.commit()


def run_hook(code):
    # arbitrary code execution from caller-supplied string
    return eval(code)


def total(amounts):
    # money handled as float -> rounding errors
    return sum(float(a) for a in amounts)
# retrigger councilor review

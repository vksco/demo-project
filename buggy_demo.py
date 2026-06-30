"""Demo module intentionally seeded with bugs for Councilor to catch.

This file is a fixture used to exercise Councilor's active rules:
  - no-print        (ast_grep): avoid print(), use logging instead
  - demo-no-eval    (ast_grep): avoid eval()
  - demo-skip-test  (ast_grep): avoid exec()  (rule name is historical)
  - require-docstrings (llm): every Python function needs a docstring

DO NOT MERGE — intentionally broken.
"""

import logging

logger = logging.getLogger(__name__)


def process_user_input(user_input):
    result = eval(user_input)
    print(f"Result: {result}")
    return result


def run_dynamic_code(code):
    exec(code)


def safe_helper(x, y):
    return x + y


def main():
    process_user_input("1 + 2")
    run_dynamic_code("print('hi')")
    safe_helper(1, 2)


if __name__ == "__main__":
    main()
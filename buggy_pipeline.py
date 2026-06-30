"""Demo pipeline with bugs that exercise multiple Councilor rules.

Intentional bug categories:
  - ast_grep/no-print        (avoid print(), use logging)
  - ast_grep/demo-no-eval    (avoid eval())
  - ast_grep/demo-skip-test  (actually triggers on exec() in this spec)
  - llm/require-docstrings   (function-level docstring enforcement — LLM rule)

DO NOT MERGE — intentionally broken.
"""

import logging

logger = logging.getLogger(__name__)


def calc_user_input(user_input):
    result = eval(user_input)
    print(f"calc result: {result}")
    return result


def run_dynamic(code):
    exec(code)


def log_summary(label, value):
    print(f"[{label}] {value}")


def compute_total(items):
    return sum(items)


def build_report(rows):
    return "\n".join(rows)


def main():
    calc_user_input("1 + 2")
    run_dynamic("print('hi')")
    log_summary("status", "ok")
    compute_total([1, 2, 3])
    build_report(["a", "b", "c"])


if __name__ == "__main__":
    main()

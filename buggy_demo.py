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
    """
    Evaluate the provided expression and print the result.
    
    Parameters:
    	user_input: Expression to evaluate.
    
    Returns:
    	The value produced by evaluating `user_input`.
    """
    result = eval(user_input)
    print(f"Result: {result}")
    return result


def run_dynamic_code(code):
    """
    Execute the provided Python code string.
    
    Parameters:
    	code (str): Python source code to execute.
    """
    exec(code)


def safe_helper(x, y):
    """
    Add two values and return the result.
    
    Parameters:
    	x: The first value.
    	y: The second value.
    
    Returns:
    	The sum of x and y.
    """
    return x + y


def main():
    """
    Run the demo workflow.
    
    Calls the module's helper functions with fixed sample inputs.
    """
    process_user_input("1 + 2")
    run_dynamic_code("print('hi')")
    safe_helper(1, 2)


if __name__ == "__main__":
    main()
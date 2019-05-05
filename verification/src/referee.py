from checkio_referee import RefereeRank, ENV_NAME



import settings_env
from tests import TESTS


class Referee(RefereeRank):
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "binary_count"
    FUNCTION_NAMES = {
        "python_3": "binary_count",
        "js_node": "binaryCount"
    }
    ENV_COVERCODE = {
        
    }
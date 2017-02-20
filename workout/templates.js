module.exports = {
  "butterfly1": "$1 * (120s elastic-butterfly + 30s rest)",
  "rotator1": "$1 * (30s elastic-rotator-external-left +\n      30s elastic-rotator-internal-left +\n      60s elbow-plank-left +\n      30s rest +\n      30s elastic-rotator-external-right +\n      30s elastic-rotator-internal-right +\n      60s elbow-plank-right +\n      30s rest)",
  "warmup1": "$1 * ($2 high-knee +\n      $2 butt-kicker +\n      $2 burpee-1 +\n      $2 burpee-2 +\n      $2 pushup-serratus +\n      $2 flutter-kick +\n      $2 rest)",
  "warmup2": "30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n30s burpee-1 +\n30s burpee-2 +\n30s burpee"
};
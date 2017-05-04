function makeScenario(emberVersion) {
  return {
    name: `ember-${emberVersion}`,
    bower: {
      dependencies: {
        'ember': `~${emberVersion}.0`
      },
      resolutions: {
        'ember': `~${emberVersion}.0`
      }
    }
  };
}

/* eslint-env node */
module.exports = {
  scenarios: [
    makeScenario('2.8'),
    makeScenario('2.9'),
    makeScenario('2.12'),
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    }
  ]
};

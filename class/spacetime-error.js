class SpacetimeError extends Error {
    constructor(...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SpacetimeError)
        }

        this.name = 'SpacetimeError';
    }
}

module.exports = SpacetimeError;

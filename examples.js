this.ExamplesCode = {
    firstMethod: function() {
        return {
            status: true,
            value: 10
        };
    },
    secondMethod: function(value) {
        if (value === "") {
            throw "Value dont't must be a empty string";
        }

        return value;
    }
};

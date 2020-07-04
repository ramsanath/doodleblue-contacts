export default class Action {
    name = "";
    TRIGGER = "";
    SUCCESS = "";
    FAILURE = "";

    constructor(name) {
        if (!name || typeof name !== "string") {
            throw new Error("missing/invalid parameter name for Action");
        }
        this.name = name;
        this.TRIGGER = name + "/TRIGGER";
        this.SUCCESS = name + "/SUCCESS";
        this.FAILURE = name + "/FAILURE";
    }

    trigger = (payload) => {
        return {
            type: this.TRIGGER,
            payload,
        }
    }

    success = (payload) => {
        return {
            type: this.SUCCESS,
            payload,
        }
    }

    failure = (payload) => {
        return {
            type: this.FAILURE,
            payload,
        }
    }

    toString = () => {
        return this.TRIGGER;
    }
}
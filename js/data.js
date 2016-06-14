(function(app) {

app.data = app.data || {};

var questions = [
    {"id": "1", "answerId":"4", "text": "Tommy was a real <span class=\"underline \"> avid <\/span> baseball card collector. He inherited the desire to collect cards because his dad had a collection, too."},
    {"id": "2", "answerId": "8", "text": "The boy was caught stealing from the store. His <span class=\"underline \"> larceny <\/span>caught up with him when the owner showed him a video tape."}
]

var answers = [
    {"id":"1", "text": "free"},
    {"id":"2", "text": "careless"},
    {"id":"3", "text": "fearful"},
    {"id":"4", "text": "eager"},
    {"id":"5", "text": "apart"},
    {"id":"6", "text": "forceful"},
    {"id":"7", "text": "angry"},
    {"id":"8", "text": "theft"},
    {"id":"9", "text": "gift"},
    {"id": "10", "text": "embellish"}
]


app.data.questions = questions;
app.data.answers = answers;

})(window.app = window.app || {});
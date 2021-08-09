CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SET TIMEZONE='America/Los_angeles';

CREATE TABLE users (
    user_id uuid DEFAULT uuid_generate_v4() NOT NULL,
    username VARCHAR (20) UNIQUE NOT NULL,
    salt VARCHAR (12) UNIQUE NOT NULL,
    passhash VARCHAR NOT NULL,
    win_count SMALLINT DEFAULT 0 NOT NULL,
    loss_count SMALLINT DEFAULT 0 NOT NULL,
    created_at TIMESTAMPTZ DEFAULT Now(),
    last_login TIMESTAMPTZ DEFAULT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE games (
    game_id uuid DEFAULT uuid_generate_v4() NOT NULL,
    winner_id uuid REFERENCES users (user_id) NOT NULL,
    loser_id uuid REFERENCES users (user_id) NOT NULL,
    num_moves SMALLINT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT Now(),
    chat_log_id uuid,
    PRIMARY KEY (game_id)
);

CREATE TABLE message (
    message_id uuid DEFAULT uuid_generate_v4() NOT NULL,
    chat_log_id uuid NOT NULL,
    sender_id uuid REFERENCES users (user_id) NOT NULL,
    recipient_id uuid REFERENCES users (user_id) NOT NULL,
    flagged BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT Now(),
    PRIMARY KEY (message_id)
);

INSERT INTO users (user_id, username, salt, passhash, win_count, loss_count, created_at, last_login)
VALUES (
    DEFAULT,
    'emilio',
    '2v4dw5106juq',
    'efca458a0e1cce7ee3a7083c7d8d51ee20c2588a3900278db058f22790275e1a',
    DEFAULT,
    DEFAULT,
    DEFAULT,
    DEFAULT
);

INSERT INTO users (user_id, username, salt, passhash, win_count, loss_count, created_at, last_login)
VALUES (
    DEFAULT,
    'jasmine',
    'lrbpOiojC8z4',
    '5c1e0c1a41a2988903c2718abafa7f48cec49e53a09c3cebcffc6d2f525b33fb',
    DEFAULT,
    DEFAULT,
    DEFAULT,
    DEFAULT
);
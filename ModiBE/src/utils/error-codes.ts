export const errorCodes = {
  invalidInput: "invalid-input",
  user: {
    userNotFound: "user-not-found",
    alreadyRegisteredUser: "already-registerd-user",
    nicknameAlreadyExists: "nickname-already-exists",
    partnerNicknameNotFound: "partner-nickname-not-found",
    noPartner: "no-partner",
    alreadyHasPartner: "already-has-partner",
    partnerAlreadyHasPartner: "partner-already-has-partner",
    requestAlreadySent: "request-already-sent",
    userNotSentYouRequest: "user-not-sent-you-request",
    partnerNotFound: "partner-not-found",
    reminderAlreadySent: "reminder-already-sent",
  },
  notes: {
    alreadyAddedNote: "already-added-note",
    cantUpdateNote: "cant-update-note",
    noteNotFound: "note-not-found",
    cantAddNoteInFuture: "cant-add-note-in-future",
    addNoteInCurrentYear: "add-note-in-current-year",
  },
  shop: {
    noTokens: "no-tokens",
    noNotesToUnlock: "no-notes-to-unlock",
    invalidMonth: "invalid-month",
    noteNotFound: "note-not-found",
    noteAlreadyUnlocked: "note-already-unlocked",
  },
};
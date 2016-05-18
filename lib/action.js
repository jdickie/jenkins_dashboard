/*
 Defines actions for this application
 */

export const CHANGE_VIEW = 'CHANGE_VIEW';
export const ADD_VIEW = 'ADD_VIEW';
export const JENKINS_STATUS = 'JENKINS_STATUS';

export function changeView(url) {
    return { type: CHANGE_VIEW, url };
}

export function addView(url) {
    return { type: ADD_VIEW, url };
}

export function jenkinsStatus() {
    
}
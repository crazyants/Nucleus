﻿import { Component } from 'vue-property-decorator';
import AppComponentBase from '@/infrastructure/core/app-component-base';

@Component
export default class RegisterComponent extends AppComponentBase {

    public username = '';
    public email = '';
    public password = '';
    public errors: INameValueDto[] = [];
    public resultMessage: string | undefined;
    public registerComplete = false;

    public onSubmit() {
        const registerInput: IRegisterInput = {
            userName: this.username,
            email: this.email,
            password: this.password,
        };

        this.appService.post<IRegisterOutput>('/api/account/register', registerInput)
            .then((response) => {
                if (!response.isError) {
                    this.resultMessage = 'Your account has been successfully created.';
                    this.registerComplete = true;
                } else {
                    this.errors = response.errors;
                }
            });
    }
}

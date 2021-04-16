import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { catchError } from "rxjs/operators";
import { handleError } from "../shared/helpers/http-response-handler";

type AppAlertType = "warning" | "danger" | "info" | "success";
export type AppAlert = { message: string; type: AppAlertType };

@Injectable({ providedIn: 'root' })
export class AppService {
    private _globalLoading = new Subject<boolean>();
    private _confirmationModal = new Subject<{ title: string; description: string; confirmationCallback: () => void; cancellationCallback?: () => void; }>();
    private _appAlerts = new Subject<AppAlert[]>();
    private _closeAppAlertByIndex = new Subject<number>();

    constructor(private http: HttpClient) { }

    setAppAlerts(alerts: AppAlert[], timeoutMs = 5000) {
        if(!alerts)
            return;

        this._appAlerts.next(alerts);

        if(alerts.length === 1)
            setTimeout(() => this.closeAppAlerts(), timeoutMs);
    }

    closeAppAlert(index: number) {
        this._closeAppAlertByIndex.next(index);
    }

    closeAppAlerts() {
        this._appAlerts.next([]);
    }

    getAppAlerts() {
        return this._appAlerts.asObservable();
    }

    getCloseAppAlertByIndex() {
        return this._closeAppAlertByIndex.asObservable();
    }

    getGlobalLoading() {
        return this._globalLoading.asObservable();
    }

    setGlobalLoading(show: boolean) {
        this._globalLoading.next(show);
    }

    getConfirmationModal() {
        return this._confirmationModal.asObservable();
    }

    setConfirmationModal(param: { title: string, description: string, confirmationCallback: () => void, cancellationCallback?: () => void }) {
        this._confirmationModal.next(param);
    }
}


import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";
import {AppLogType} from "./appLogType";

const appLogName = nameof<AppLog>();

export class AppLog implements DataErrorInfo {
      public static validations =
            new Map([
                  [appLogName("user"), (a: AppLog) => maxLengthRequired(a.user, 50, "User")],
                  [appLogName("source"), (a: AppLog) => maxLengthRequired(a.source, 50, "Source")],
                  [appLogName("action"), (a: AppLog) => maxLengthRequired(a.action, 50, "Action")],
                  [appLogName("message"), (a: AppLog) => maxLengthRequired(a.message, 400, "Message")],
            ]);
      public id = 0;
      public isRead = false;
      public name = "";
      public dateTime = new Date();
      public user = "";
      public type = AppLogType.Information;
      public source = "";
      public action = "";
      public message = "";
      public description = "";
      public getError = (property) => getError(AppLog.validations, this, property);
}
